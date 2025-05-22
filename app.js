const buttons = document.querySelectorAll('.btn');
const textarea = document.querySelector('textarea');

const backspace_btn = document.querySelector('.backspace');
const shift_btn = document.querySelector('.shift');
const space_btn = document.querySelector('.space');
const enter_btn = document.querySelector('.enter');

let chars = [];
let shiftOn = false;

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        let char = btn.textContent;

        // Ubah ke huruf kapital jika Shift aktif dan tombol berupa huruf kecil
        if (shiftOn && char.length === 1 && char.match(/[a-z]/)) {
            char = char.toUpperCase();
        }

        textarea.value += char;
        chars = textarea.value.split('');
        console.log(chars);
    });
});

backspace_btn.addEventListener('click', () => {
    chars.pop();
    textarea.value = chars.join('');
});

space_btn.addEventListener('click', () => {
    chars.push(' ');
    textarea.value = chars.join('');
});

shift_btn.addEventListener('click', () => {
    shiftOn = !shiftOn; // toggle status Shift
    buttons.forEach(btn => {
        btn.classList.toggle('upper');
    });
});

enter_btn.addEventListener('click', () => {
    chars.push('\n');
    textarea.value = chars.join('');
});

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    // Ubah ikon tombol
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
