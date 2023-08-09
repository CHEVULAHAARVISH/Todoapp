
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.task input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const task = this.closest('.task');
            task.classList.toggle('completed', this.checked);
        });
    });
});
