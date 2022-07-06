const counters = document.querySelectorAll('[data-counter]');

if (counters) {
    counters.forEach(counter => {
        counter.addEventListener('click', e => {
            const target = e.target;

            if (target.closest('.counter__button')) {
                let value = target.closest('.counter').querySelector('input').value;

                if (target.classList.contains('counter__button-plus')) {
                    value++;
                } else {
                    --value;
                }

                if (value < 0) {
                    document.querySelector('.counter__value').classList.remove('over');
                    document.querySelector('.counter__value').classList.add('less');
                } if (value > 0) {
                    document.querySelector('.counter__value').classList.remove('less');
                    document.querySelector('.counter__value').classList.add('over');
                } if ( value == 0) {
                    document.querySelector('.counter__value').classList.remove('less');
                    document.querySelector('.counter__value').classList.remove('over');
                }

                target.closest('.counter').querySelector('input').value = value;
            }
        })
    })
}