       // Data from PHP converted to JavaScript
        const images = [
            {
                id: 1,
                title: "لحظات جميلة",
                src: "images/portarite.jpeg",
                description: "تصوير بورتريه احترافي",
                category: "portraits"
            },
            {
                id: 2,
                title: "أفراح سعيدة",
                src: "images/weeding.jpeg",
                description: "تصوير حفلات الزفاف",
                category: "weddings"
            },
            {
                id: 3,
                title: "مناسبات خاصة",
                src: "images/weeding2.jpeg",
                description: "تصوير المناسبات المختلفة",
                category: "events"
            },
            {
                id: 4,
                title: "جمال الطبيعه",
                src: "images/neture.jpg",
                description: "تصوير المناظر الطبيعية",
                category: "nature"
            },
            {
                id: 5,
                title: "لحظات تخرج",
                src: "images/graduate.jpeg",
                description: "تصوير حفلات التخرج",
                category: "events"
            },
            {
                id: 6,
                title: "بورتريه فني",
                src: "images/portarite2.jpeg",
                description: "تصوير شخصي احترافي",
                category: "portraits"
            },
            {
                id: 7,
                title: "زفاف أحلام",
                src: "images/weeding4.jpeg",
                description: "تصوير ليلة الزفاف",
                category: "weddings"
            },
            {
                id: 8,
                title: "غروب ساحر",
                src: "images/sunset.jpg",
                description: "تصوير غروب الشمس",
                category: "nature"
            }
        ];


          // Gallery state
        let currentFilter = 'all';
        let currentView = 'grid';
        let currentLightboxIndex = 0;
        let visibleImages = 20;
        let filteredImages = images;




            // Render gallery
         window.renderGallery=()=> {
            const container = document.getElementById('galleryContainer');
            const loadMoreBtn = document.getElementById('loadMoreBtn');
            
            // Filter images
            filteredImages = currentFilter === 'all' 
                ? images 
                : images.filter(img => img.category === currentFilter);
            
            // Clear container
            container.innerHTML = '';
            
            // Set view class
            container.className = currentView === 'grid' ? 'gallery-grid' : 'gallery-list';
            
            // Render visible images
            const imagesToShow = filteredImages.slice(0, visibleImages);
            
            imagesToShow.forEach((image, index) => {
                const item = createGalleryItem(image, index);
                container.appendChild(item);
            });
            
            // Show/hide load more button
            loadMoreBtn.style.display = visibleImages >= filteredImages.length ? 'none' : 'block';
        }

        // Create gallery item
        function createGalleryItem(image, index) {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.onclick = () => openLightbox(index);
            
            if (currentView === 'grid') {
                item.innerHTML = `
                    <img src="${image.src}" class=" w-full h-full object-fit " alt="${image.title}" loading="lazy">
                    <div class="gallery-overlay">
                        <h3 class="text-white text-lg font-bold">${image.title}</h3>
                        <p class="text-white/80 text-sm">${image.description}</p>
                        <div class="flex gap-2 mt-2">
                            <span class="bg-primary/50 text-white px-2 py-1 rounded-full text-xs">${getCategoryName(image.category)}</span>
                        </div>
                    </div>
                `;
            } else {
                item.innerHTML = `
                    <img src="${image.src}" alt="${image.title}" class=" w-full h-full object-fit " loading="lazy">
                    <div class="gallery-info">
                        <h3 class="text-white text-lg font-bold mb-2">${image.title}</h3>
                        <p class="text-white/80 text-sm mb-2">${image.description}</p>
                        <span class="bg-primary/50 text-white px-2 py-1 rounded-full text-xs">${getCategoryName(image.category)}</span>
                    </div>
                `;
            }
            
            return item;
        }

        // Get category name in Arabic
        function getCategoryName(category) {
            const names = {
                'portraits': 'بورتريه',
                'weddings': 'أفراح',
                'events': 'مناسبات',
                'nature': 'طبيعة'
            };
            return names[category] || category;
        }


                // Setup event listeners
        window.setupEventListeners=()=> {
            // Filter buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    currentFilter = btn.dataset.filter;
                    visibleImages = 6;
                    renderGallery();
                });
            });
            
            // View toggle
            document.querySelectorAll('.view-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    currentView = btn.dataset.view;
                    renderGallery();
                });
            });
            
            // Load more button
            document.getElementById('loadMoreBtn').addEventListener('click', loadMoreImages);
            
            // Keyboard navigation for lightbox
            document.addEventListener('keydown', (e) => {
                if (document.getElementById('lightbox').classList.contains('active')) {
                    if (e.key === 'Escape') closeLightbox();
                    if (e.key === 'ArrowLeft') nextImage();
                    if (e.key === 'ArrowRight') prevImage();
                }
            });
        }

        // Load more images
        function loadMoreImages() {
            const btn = document.getElementById('loadMoreBtn');
            const loadText = btn.querySelector('.load-text');
            const loading = btn.querySelector('.loading');
            
            loadText.classList.add('hidden');
            loading.classList.remove('hidden');
            
            setTimeout(() => {
                visibleImages += 6;
                renderGallery();
                loadText.classList.remove('hidden');
                loading.classList.add('hidden');
            }, 1000);
        }

        // Lightbox functions
        function openLightbox(index) {
            currentLightboxIndex = index;
            const lightbox = document.getElementById('lightbox');
            const image = document.getElementById('lightboxImage');
            const title = document.getElementById('lightboxTitle');
            const description = document.getElementById('lightboxDescription');
            
            const currentImage = filteredImages[index];
            image.src = currentImage.src;
            title.textContent = currentImage.title;
            description.textContent = currentImage.description;
            
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function nextImage() {
            currentLightboxIndex = (currentLightboxIndex + 1) % filteredImages.length;
            updateLightboxImage();
        }

        function prevImage() {
            currentLightboxIndex = (currentLightboxIndex - 1 + filteredImages.length) % filteredImages.length;
            updateLightboxImage();
        }

        function updateLightboxImage() {
            const image = document.getElementById('lightboxImage');
            const title = document.getElementById('lightboxTitle');
            const description = document.getElementById('lightboxDescription');
            
            const currentImage = filteredImages[currentLightboxIndex];
            image.src = currentImage.src;
            title.textContent = currentImage.title;
            description.textContent = currentImage.description;
        }

        

