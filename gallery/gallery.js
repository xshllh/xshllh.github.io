
  // 瀑布流相册功能

  document.addEventListener('DOMContentLoaded', function () {
    // 获取照片数据
    // const photoData = JSON.parse(document.getElementById('photoData').textContent);
    let albumsByFolder = {};
    let currentAlbum = null;
    const BUTTONS_PER_ROW = 4; // 每行显示的按钮数量

    let allPhotos = [];
    let currentPhotos = [];
    let displayedCount = 8;
    let currentFilter = 'all';
    let currentSearch = '';

    const photoGrid = document.getElementById('photoGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const tobtn = document.getElementById('tosubbtn');
    const loadMoreBtn = document.getElementById('loadMore');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const imageTitle = document.getElementById('imageTitle');
    const imageDesc = document.getElementById('imageDesc');
    const imageDate = document.getElementById('imageDate');
    const imageTags = document.getElementById('imageTags');
    const closeModal = document.querySelector('.close-modal');
    const selectFilter = document.getElementById('selectFilter');
    const selectFilterFile = document.getElementById('selectFilterfile');

    // 异步加载数据并初始化
    async function loadData() {
      const photoData = await fetchJsonData('./gallery.json');
      if (photoData) {
        allPhotos = photoData;
        currentPhotos = [...photoData];
        albumsByFolder = organizeGalleryData(allPhotos);
        renderButtons();
        initGallery();
      } else {
        console.error('无法加载相册数据');
        photoGrid.innerHTML = '<p>加载失败，请稍后重试</p>';
      }
    }

    // 渲染按钮
    function renderButtons() {
      const firstRow = document.getElementById('firstRow');
      const restRows = document.getElementById('restRows');
      const toggleBtn = document.getElementById('toggleBtn');

      const folders = Object.keys(albumsByFolder).sort();

      firstRow.innerHTML = '';
      restRows.innerHTML = '';

      const btn = document.createElement('button');
      btn.className = 'album-btn allbtn active';
      btn.dataset.filter = "alldata";
      btn.textContent = `全部`;
      btn.onclick = () => filterPhotos("all", 2);
      firstRow.appendChild(btn);
      folders.forEach((folder, index) => {
        //创建select选项
        const option = document.createElement('option');
        option.value = folder;
        option.textContent = folder;
        selectFilterFile.appendChild(option);
        // 创建按钮
        const btn = document.createElement('button');
        btn.className = 'album-btn allbtn';
        btn.dataset.filter = folder;
        btn.textContent = `${folder} (${albumsByFolder[folder].photos.length}张)`;
        btn.onclick = () => filterPhotos(folder, 2);
        if (index < BUTTONS_PER_ROW) {
          firstRow.appendChild(btn);
        } else {
          restRows.appendChild(btn);
        }
      });

      // 如果按钮数量超过BUTTONS_PER_ROW，显示展开按钮
      if (folders.length > BUTTONS_PER_ROW) {
        toggleBtn.style.display = 'flex';
      }
    }
    // 初始化相册
    function initGallery() {
      renderPhotos(currentPhotos.slice(0, displayedCount));
      setupEventListeners();
    }

    // 从url提取文件夹名
    function extractFolderName(url) {
      const match = url.match(/photos\/([^\/]+)/);
      return match ? match[1] : null;
    }
    // 从gallery.json组织数据
    function organizeGalleryData(data) {
      const organized = {};

      data.forEach(item => {
        const folderName = item.folder || extractFolderName(item.url);
        if (folderName) {
          if (!organized[folderName]) {
            organized[folderName] = {
              name: folderName,
              photos: []
            };
          }
          organized[folderName].photos.push({
            filePath: item.url,
            fileName: item.title + (item.url.match(/\.[^.]+$/) || ['.'])[0],
            title: item.title,
            description: item.description,
            date: item.date,
            tags: item.tags
          });
        }
      });

      return organized;
    }


    // 渲染照片
    function renderPhotos(photos) {
      photoGrid.innerHTML = '';

      photos.forEach(photo => {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        photoItem.dataset.category = photo.category;
        photoItem.dataset.tags = photo.tags.join(',');

        photoItem.innerHTML = `
        <img 
          src="${photo.thumbnail}" 
          alt="${photo.title}"
          data-full="${photo.url}"
          loading="lazy"
          class="photo-thumbnail"
        >
        <div class="photo-info">
          <h3>${photo.title}</h3>
          <p>${photo.description}</p>
          <p><small>${photo.date}</small></p>
          <div class="photo-tags">
            ${photo.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
      `;

        // 添加点击事件查看大图
        photoItem.querySelector('img').addEventListener('click', () => {
          openImageModal(photo);
        });

        photoGrid.appendChild(photoItem);
      });

      // 检查是否需要显示"加载更多"按钮
      loadMoreBtn.style.display = displayedCount < currentPhotos.length ? 'block' : 'none';
    }

    // 筛选照片
    function filterPhotos(category, flg) {
      currentFilter = category;
      currentPhotos = allPhotos.filter(photo => {
        const matchesFilter = category === 'all' || category === 'alldata' ||
          (flg === 1 ? photo.category === category : photo.folder === category);
        const matchesSearch = currentSearch === '' ||
          photo.title.toLowerCase().includes(currentSearch) ||
          photo.description.toLowerCase().includes(currentSearch) ||
          photo.tags.some(tag => tag.toLowerCase().includes(currentSearch));
        return matchesFilter && matchesSearch;
      });

      displayedCount = 8;
      renderPhotos(currentPhotos.slice(0, displayedCount));

      // 更新筛选按钮状态
      document.querySelectorAll('.allbtn').forEach(btn => {
        if (btn.dataset.filter === category) btn.classList.add('active');
        else btn.classList.remove('active'); 
        if(flg==1){
          if (btn.dataset.filter === 'alldata') btn.classList.add('active');
        }  else {
          if (btn.dataset.filter === 'all') btn.classList.add('active');
        }  
      });
    }

    // 搜索照片
    function searchPhotos() {
      currentSearch = searchInput.value.toLowerCase().trim();
      // 根据当前筛选器类型调用 filterPhotos
      const filterType = currentFilter === 'all' ? 1 : 2;
      filterPhotos(currentFilter, filterType);
    }
    function tosubgallery() {
      window.location.href = "私密相册/";
    }

    // 加载更多照片
    function loadMorePhotos() {
      displayedCount += 4;
      renderPhotos(currentPhotos.slice(0, displayedCount));

      // 平滑滚动到新加载的照片位置
      const newPhotos = document.querySelectorAll('.photo-item');
      if (newPhotos.length > 0) {
        newPhotos[newPhotos.length - 1].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      }
    }

    // 打开图片预览模态框
    function openImageModal(photo) {
      modalImage.src = photo.url;
      modalImage.alt = photo.title;
      imageTitle.textContent = photo.title;
      imageDesc.textContent = photo.description;
      imageDate.textContent = `拍摄日期: ${photo.date}`;
      imageTags.textContent = `标签: ${photo.tags.join(', ')}`;

      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }

    // 关闭图片预览模态框
    function closeImageModal() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    //  定义一个异步函数来获取JSON数据
    async function fetchJsonData(url) {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP错误! 状态码: ${response.status}`);
        }

        const jsonData = await response.json();
        return jsonData;

      } catch (error) {
        console.error('在获取JSON数据时发生错误:', error);
        return null;
      }
    }

    // 设置事件监听器
    function setupEventListeners() {
      // 筛选按钮事件
      filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          filterPhotos(btn.dataset.filter, 1);
        });
      });

      // 下拉选择器事件
      if (selectFilter) {
        selectFilter.addEventListener('change', (e) => {
          selectFilterFile.value = 'all';
          const selectedValue = e.target.value; // 调试输出
          filterPhotos(selectedValue, 1);
          });
      }
    if (selectFilterFile) {
        selectFilterFile.addEventListener('change', (e) => {
          selectFilter.value = 'all';
          const selectedValue = e.target.value;// 调试输出
            filterPhotos(selectedValue, 2);
          });
      }
      // 搜索按钮事件
      searchBtn.addEventListener('click', searchPhotos);
      tobtn.addEventListener('click', tosubgallery);

      // 回车键搜索
      searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          searchPhotos();
        }
      });

      // 加载更多事件
      loadMoreBtn.addEventListener('click', loadMorePhotos);

      // 模态框关闭事件
      closeModal.addEventListener('click', closeImageModal);

      // 点击模态框背景关闭
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeImageModal();
        }
      });

      // ESC键关闭模态框
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeImageModal();
        }
      });
    }
    // 展开/折叠按钮
    document.getElementById('toggleBtn').addEventListener('click', function () {
      const restRows = document.getElementById('restRows');
      const isExpanded = this.classList.contains('expanded');

      if (isExpanded) {
        restRows.classList.add('hidden');
        this.classList.remove('expanded');
        this.querySelector('span:first-child').textContent = '更多';
      } else {
        restRows.classList.remove('hidden');
        this.classList.add('expanded');
        this.querySelector('span:first-child').textContent = '收起';
      }
    });
    // 启动加载
    loadData();
  });
