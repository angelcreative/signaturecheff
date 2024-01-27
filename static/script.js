const apiKey = "ba238be3f3764905b1bba03fc7a22e28"; // imgbb API key
const uploadUrl = "https://api.imgbb.com/1/upload";


document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggleButton');
    const instructionText = document.getElementById('instructionText');

    if (toggleButton && instructionText) {
        toggleButton.addEventListener('click', function() {
            if (instructionText.style.display === 'none') {
                instructionText.style.display = 'block';
            } else {
                instructionText.style.display = 'none';
            }
        });
    }
});


// Function to handle image uploads
async function uploadImage(imageFile) {
    const formData = new FormData();
    formData.append('image', imageFile);

    try {
        const response = await fetch(uploadUrl + '?key=' + apiKey, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        return data.data.url;
    } catch (error) {
        console.error('Error uploading image:', error);
        return '';
    }
}


// Rest of your script code (uploadImage function, getSocialIcon function, generateSignature function)


// Function to determine which social media icon to use
function getSocialIcon(url, iconColor) {
    // Check if the URL is for LinkedIn
    if (url.includes("linkedin.com")) {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="none}" fill="${iconColor}" stroke-linecap="round" stroke-linejoin="round"><path xmlns="http://www.w3.org/2000/svg" d="M20.7273 0H3.27273C2.40475 0 1.57232 0.344804 0.95856 0.95856C0.344804 1.57232 0 2.40475 0 3.27273V20.7273C0 21.5953 0.344804 22.4277 0.95856 23.0414C1.57232 23.6552 2.40475 24 3.27273 24H20.7273C21.5953 24 22.4277 23.6552 23.0414 23.0414C23.6552 22.4277 24 21.5953 24 20.7273V3.27273C24 2.40475 23.6552 1.57232 23.0414 0.95856C22.4277 0.344804 21.5953 0 20.7273 0ZM8.18182 18.9927C8.182 19.0593 8.16904 19.1252 8.1437 19.1867C8.11836 19.2483 8.08112 19.3042 8.03412 19.3513C7.98713 19.3985 7.9313 19.4359 7.86983 19.4614C7.80836 19.4869 7.74246 19.5 7.67591 19.5H5.52C5.45333 19.5002 5.38729 19.4872 5.32566 19.4618C5.26404 19.4363 5.20804 19.399 5.1609 19.3518C5.11376 19.3047 5.0764 19.2487 5.05097 19.1871C5.02555 19.1254 5.01255 19.0594 5.01273 18.9927V9.95455C5.01273 9.82001 5.06617 9.69098 5.1613 9.59585C5.25644 9.50072 5.38546 9.44727 5.52 9.44727H7.67591C7.81021 9.44763 7.93889 9.50124 8.03372 9.59633C8.12856 9.69142 8.18182 9.82024 8.18182 9.95455V18.9927ZM6.59727 8.59091C6.19272 8.59091 5.79725 8.47095 5.46088 8.24619C5.12451 8.02143 4.86234 7.70197 4.70752 7.32822C4.5527 6.95446 4.5122 6.54319 4.59112 6.14641C4.67005 5.74963 4.86486 5.38516 5.15092 5.0991C5.43698 4.81304 5.80145 4.61823 6.19822 4.5393C6.595 4.46038 7.00628 4.50089 7.38003 4.6557C7.75379 4.81052 8.07325 5.07269 8.29801 5.40906C8.52276 5.74543 8.64273 6.1409 8.64273 6.54545C8.64273 7.08794 8.42722 7.60821 8.04363 7.99181C7.66003 8.37541 7.13976 8.59091 6.59727 8.59091ZM19.4509 19.0282C19.4511 19.0895 19.4391 19.1502 19.4158 19.2069C19.3924 19.2635 19.3581 19.315 19.3147 19.3584C19.2714 19.4017 19.2199 19.436 19.1632 19.4594C19.1066 19.4828 19.0458 19.4947 18.9845 19.4945H16.6664C16.6051 19.4947 16.5443 19.4828 16.4877 19.4594C16.431 19.436 16.3795 19.4017 16.3362 19.3584C16.2929 19.315 16.2585 19.2635 16.2351 19.2069C16.2118 19.1502 16.1998 19.0895 16.2 19.0282V14.7941C16.2 14.1614 16.3855 12.0232 14.5459 12.0232C13.1209 12.0232 12.8305 13.4864 12.7732 14.1436V19.0336C12.7732 19.1562 12.725 19.2738 12.639 19.361C12.553 19.4483 12.4361 19.4982 12.3136 19.5H10.0745C10.0134 19.5 9.95279 19.4879 9.89628 19.4645C9.83978 19.441 9.78846 19.4066 9.74526 19.3633C9.70206 19.32 9.66784 19.2686 9.64455 19.212C9.62126 19.1554 9.60937 19.0948 9.60955 19.0336V9.915C9.60937 9.85382 9.62126 9.79321 9.64455 9.73663C9.66784 9.68006 9.70206 9.62864 9.74526 9.58531C9.78846 9.54199 9.83978 9.50762 9.89628 9.48416C9.95279 9.46071 10.0134 9.44864 10.0745 9.44864H12.3136C12.4373 9.44864 12.5559 9.49777 12.6434 9.58523C12.7309 9.67269 12.78 9.79131 12.78 9.915V10.7032C13.3091 9.90818 14.0932 9.29727 15.7664 9.29727C19.4727 9.29727 19.4482 12.7582 19.4482 14.6591L19.4509 19.0282Z" />
                </svg>`;
    } 
    // Check if the URL is for Facebook
    else if (url.includes("facebook.com")) {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="${iconColor}" stroke-linecap="round" stroke-linejoin="round"><path xmlns="http://www.w3.org/2000/svg" d="M20.7273 0H3.27273C2.40475 0 1.57232 0.344804 0.95856 0.95856C0.344804 1.57232 0 2.40475 0 3.27273V20.7273C0 21.5953 0.344804 22.4277 0.95856 23.0414C1.57232 23.6552 2.40475 24 3.27273 24H20.7273C21.5953 24 22.4277 23.6552 23.0414 23.0414C23.6552 22.4277 24 21.5953 24 20.7273V3.27273C24 2.40475 23.6552 1.57232 23.0414 0.95856C22.4277 0.344804 21.5953 0 20.7273 0ZM15.8018 10.5805L15.5605 12.6695C15.5507 12.765 15.5061 12.8536 15.4352 12.9183C15.3642 12.9829 15.2719 13.0192 15.1759 13.02H12.9941L12.9832 19.2177C12.9839 19.2912 12.9557 19.362 12.9047 19.4148C12.8537 19.4676 12.7839 19.4982 12.7105 19.5H10.5C10.4632 19.5 10.4269 19.4926 10.393 19.4782C10.3592 19.4639 10.3287 19.4428 10.3032 19.4163C10.2777 19.3898 10.2579 19.3584 10.2448 19.3241C10.2318 19.2897 10.2258 19.2531 10.2273 19.2164V13.02H8.59091C8.53951 13.0195 8.48873 13.0088 8.44145 12.9887C8.39417 12.9685 8.35133 12.9392 8.31536 12.9025C8.2794 12.8658 8.25103 12.8223 8.23186 12.7746C8.21269 12.7269 8.2031 12.6759 8.20364 12.6245L8.19545 10.5341C8.19473 10.4825 8.20418 10.4313 8.22325 10.3834C8.24232 10.3355 8.27065 10.2918 8.30661 10.2548C8.34258 10.2178 8.38547 10.1883 8.43285 10.1679C8.48022 10.1475 8.53115 10.1366 8.58273 10.1359H10.2273V8.11773C10.2273 5.775 11.6182 4.5 13.6582 4.5H15.33C15.3817 4.50053 15.4328 4.51127 15.4803 4.53158C15.5278 4.5519 15.5709 4.5814 15.607 4.6184C15.6431 4.65539 15.6716 4.69915 15.6907 4.74716C15.7099 4.79517 15.7194 4.84649 15.7186 4.89818V6.65864C15.7194 6.71033 15.7099 6.76165 15.6907 6.80966C15.6716 6.85767 15.6431 6.90143 15.607 6.93842C15.5709 6.97542 15.5278 7.00492 15.4803 7.02523C15.4328 7.04555 15.3817 7.05629 15.33 7.05682H14.3045C13.1959 7.05682 12.9805 7.60227 12.9805 8.38909V10.1359H15.4173C15.4728 10.1368 15.5274 10.1494 15.5777 10.1729C15.628 10.1963 15.6727 10.2302 15.709 10.2721C15.7453 10.3141 15.7724 10.3632 15.7883 10.4164C15.8043 10.4695 15.8089 10.5254 15.8018 10.5805Z"/></svg>`;
    } 
    // Placeholder for the "X" social media
    else if (url.includes("x.com")) {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="${iconColor}" stroke-linecap="round" stroke-linejoin="round"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M3.27273 0H20.7273C21.5953 0 22.4277 0.344804 23.0414 0.95856C23.6552 1.57232 24 2.40475 24 3.27273V20.7273C24 21.5953 23.6552 22.4277 23.0414 23.0414C22.4277 23.6552 21.5953 24 20.7273 24H3.27273C2.40475 24 1.57232 23.6552 0.95856 23.0414C0.344804 22.4277 0 21.5953 0 20.7273V3.27273C0 2.40475 0.344804 1.57232 0.95856 0.95856C1.57232 0.344804 2.40475 0 3.27273 0ZM4.07406 4.37576C4.19086 4.14526 4.42732 4 4.68572 4H8.58698C8.80541 4 9.01077 4.10407 9.13994 4.28022L13.2057 9.82457L18.8294 4.20084C19.0972 3.93305 19.5314 3.93305 19.7992 4.20084C20.067 4.46863 20.067 4.9028 19.7992 5.17059L14.0262 10.9435L19.8673 18.9088C20.0201 19.1172 20.0428 19.3937 19.926 19.6242C19.8092 19.8547 19.5727 20 19.3143 20H15.413C15.1946 20 14.9892 19.8959 14.8601 19.7198L10.7943 14.1754L5.17059 19.7992C4.9028 20.0669 4.46863 20.0669 4.20084 19.7992C3.93306 19.5314 3.93306 19.0972 4.20084 18.8294L9.97378 13.0565L4.13275 5.09121C3.97994 4.88284 3.95725 4.60625 4.07406 4.37576ZM8.23949 5.37143L12.5298 11.2221C12.5536 11.2629 12.5819 11.3017 12.6148 11.3379L17.9611 18.6286H15.7605L6.03889 5.37143H8.23949Z" /></svg>`;
    } 
    else {
        // Return an empty string if URL doesn't match
        return '';
    }
}



async function generateSignature() {
    event.preventDefault();

    var name = document.getElementById('name').value || '';
    var position = document.getElementById('position').value || '';
    var email = document.getElementById('email').value || '';
    var phone = document.getElementById('phone').value || '';
    var website = document.getElementById('website').value || '';
    var social1 = document.getElementById('social1').value || '';
    var social2 = document.getElementById('social2').value || '';
    var social3 = document.getElementById('social3').value || '';
    var nameColor = document.getElementById('nameColor').value || '';
    var bodyColor = document.getElementById('bodyColor').value || '';
    var iconColor = document.getElementById('iconColor').value || '#000000'; // Default black color
    var linkColor = document.getElementById('linkColor').value || '#0000FF'; // Default blue color
    var underlineLinks = document.getElementById('underlineLinks').checked;
    var textDecoration = underlineLinks ? 'underline' : 'none';

    // Upload company logo, personal image, and banner image
    var companyLogoFile = document.getElementById('companyLogo').files[0];
    var personalImageFile = document.getElementById('avatar').files[0];
    var bannerImageFile = document.getElementById('banner').files[0];

    var companyLogoUrl = companyLogoFile ? await uploadImage(companyLogoFile) : '';
    var personalImageUrl = personalImageFile ? await uploadImage(personalImageFile) : '';
    var bannerImageUrl = bannerImageFile ? await uploadImage(bannerImageFile) : '';
        var bannerUrl = document.getElementById('bannerUrl').value || '';


    // Construct the signature HTML
    const signatureHtml = `
    <div style="font-family: Arial, sans-serif;">
        <div dir="ltr" data-smartmail="gmail_signature">
            <div dir="ltr">
                <table cellpadding="0" cellspacing="0">
                    <tbody>
                        <tr valign="top">
                            <td style="text-align:center;padding-top:20px">
                                ${personalImageUrl ? `<img src="${personalImageUrl}" alt="${name}" style="border: 1px solid #0000000d;
    width: 120px;
    height: 120px;
    border-radius: 120px;
    background: radial-gradient(#fffdfd, #e7e7e7);"><br>` : ''}
                                ${companyLogoUrl ? `<img src="${companyLogoUrl}" alt="Company Logo" width="100"><br>` : ''}
                                ${social1 ? `<a href="${social1}" target="_blank">${getSocialIcon(social1, iconColor)}</a>` : ''}
                                ${social2 ? `<a href="${social2}" target="_blank">${getSocialIcon(social2, iconColor)}</a>` : ''}
                                ${social3 ? `<a href="${social3}" target="_blank">${getSocialIcon(social3, iconColor)}</a>` : ''}
                            </td>
                            <td style="padding-left:30px">
                                <h2 style="color:${nameColor}; margin-bottom: 8px; margin-left: 4px;">${name}</h2>
                                <p style="color:${bodyColor}; margin:4px;">${position}</p>
                                ${email ? `<p style="margin:4px;"><a href="mailto:${email}" style="color:${linkColor}; text-decoration:${textDecoration};">${email}</a></p>` : ''}
                                ${phone ? `<p style="margin:4px;"color:${linkColor};><a href="tel:${phone}" style="color:${linkColor}; text-decoration:${textDecoration};">${phone}</a>
</p>` : ''}
                                
${website ? `<p style="margin:4px;"><a href="${website}" style="color:${linkColor}; text-decoration:${textDecoration};">${website}</a></p>` : ''}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        ${bannerImageUrl ? `<a href="${bannerUrl}" target="_blank"><img style="margin-top:40px" src="${bannerImageUrl}" alt="Banner" height="100"></a>` : ''}
    </div>
    `;

    document.getElementById('signaturePreview').innerHTML = signatureHtml;
}





