
        // Modal functions
        function openBookingModal() {
            const modal = document.getElementById('bookingModal');
            const modalContent = modal.querySelector('.modal-scale');
            
            modal.classList.remove('hidden');
            setTimeout(() => {
                modalContent.classList.add('show');
            }, 10);
        }

        function closeBookingModal() {
            const modal = document.getElementById('bookingModal');
            const modalContent = modal.querySelector('.modal-scale');
            
            modalContent.classList.remove('show');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        // Form submission
        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'جاري الإرسال...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                submitButton.textContent = 'تم الإرسال بنجاح ✅';
                submitButton.className = submitButton.className.replace('from-primary to-accent', 'from-green-500 to-green-600');
                
                setTimeout(() => {
                    closeBookingModal();
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    submitButton.className = submitButton.className.replace('from-green-500 to-green-600', 'from-primary to-accent');
                    this.reset();
                }, 2000);
            }, 1500);
        });

        // Close modal when clicking outside
        document.getElementById('bookingModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeBookingModal();
            }
        });
