let btnClose = document.getElementById('btn_close');
let btnOpen = document.getElementById('btn_open');
let containerModal = document.querySelector('.modal_main');
let colorBody = document.querySelector('body');
//open modal
    btnOpen.addEventListener('click', function open() {
        containerModal.classList = "container_modal_visible";
        containerModal.style.boxShadow = "-1px 1px 15px 23px #2E2F61";
        colorBody.style.backgroundColor = "black";
    });
//close modal
    btnClose.addEventListener('click', function () {
        containerModal.classList.toggle("modal_main");
        colorBody.style.backgroundColor = "mintcream";
    });


