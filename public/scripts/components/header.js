// Header Component
export function createHeader({ toggleSlideout }) {
    const header = document.createElement('header');
    header.className = 'bg-white shadow-md';

    header.innerHTML = `
        <div class="container mx-auto px-4 py-2 flex items-center justify-between">
            <div class="flex items-center">
                <img src="images/Untitled 1.png" alt="StudiWell Logo" class="w-24 h-20"> <!-- Increased logo size -->
                <h1 class="text-2xl font-bold text-gray-800 ml-4">StudiWell</h1>
            </div>
            <div class="flex items-center space-x-6">
                <nav>
                    <ul class="flex space-x-4">
                        <li><a href="index.html" class="text-gray-700 hover:text-gray-900">Home</a></li>
                        <li><a href="aboutme.html" class="text-gray-700 hover:text-gray-900">About</a></li>
                        <li><a href="students.html" class="text-gray-700 hover:text-gray-900">Student</a></li>
                        <li><a href="features.html" class="text-gray-700 hover:text-gray-900">Feature</a></li>
                    </ul>
                </nav>
                <div class="account-menu relative">
                    <button id="accountBtn" class="account-button bg-blue-500 text-white px-4 py-2 rounded">My Account</button>
                    <div id="accountSlideout" class="account-slideout fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out">
                        <div class="p-4">
                            <h2 class="text-xl font-bold mb-4">Account</h2>
                            <a href="login.html" id="signInBtn" class="block w-full text-center bg-blue-500 text-white px-4 py-2 rounded mb-2">Sign In</a>
                            <a href="#" id="signOutBtn" class="block w-full text-center bg-red-500 text-white px-4 py-2 rounded mb-2 hidden">Sign Out</a>
                            <button id="closeSlideout" class="mt-4 text-gray-600 hover:text-gray-800">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const accountBtn = header.querySelector('#accountBtn');
    const accountSlideout = header.querySelector('#accountSlideout');
    const closeSlideout = header.querySelector('#closeSlideout');

    accountBtn.addEventListener('click', () => {
        accountSlideout.classList.toggle('translate-x-full');
    });

    closeSlideout.addEventListener('click', () => {
        accountSlideout.classList.add('translate-x-full');
    });
    return header;
}

