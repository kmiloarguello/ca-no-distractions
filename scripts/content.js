// Default path without notification
const defaultPath = '<path fill="currentColor" d="M12,20.664c-2.447,0.006-4.795-0.966-6.521-2.702c-0.381-0.381-0.381-1,0-1.381c0.381-0.381,1-0.381,1.381,0 l0,0c2.742,2.742,7.153,2.849,10.024,0.244c0.4-0.361,1.018-0.33,1.379,0.07c0.36,0.398,0.33,1.013-0.066,1.375 C16.502,19.813,14.292,20.666,12,20.664z M19.965,14.552c-0.539,0-0.977-0.437-0.977-0.976c0-0.085,0.011-0.17,0.033-0.253 c1.009-3.746-1.105-7.623-4.8-8.804c-0.51-0.175-0.782-0.731-0.607-1.241c0.17-0.495,0.7-0.768,1.201-0.619 c4.688,1.498,7.371,6.416,6.092,11.169C20.793,14.255,20.407,14.551,19.965,14.552z M3.94,14.162 c-0.459-0.001-0.856-0.321-0.953-0.769C1.939,8.584,4.858,3.801,9.613,2.533c0.52-0.144,1.058,0.161,1.201,0.681 c0.144,0.52-0.161,1.058-0.681,1.201c-0.005,0.001-0.01,0.003-0.015,0.004C6.37,5.418,4.07,9.187,4.895,12.977 c0.114,0.527-0.221,1.048-0.748,1.162C4.079,14.154,4.01,14.162,3.94,14.162z"></path>';

// This function waits until the element appears
// If the element appears, it will resolve the promise
async function checkIfItHasUnread() {
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            // get an element where data-testid="status-v3-unread"
            const span = document.querySelector('[data-testid="status-v3-unread"]');
            if (span) {
				console.log("found unread element");
                clearInterval(interval);
                resolve();
            }
        }, 50);
    });
}


// This function replaces the path of the svg element
// It will replace the path with the default path
// Also, it will add a class to the svg element
function replacePathFromSvgStatus() {
	// get the element
	const span = document.querySelector('[data-testid="status-v3-unread"]');
	// get the children svg element
	const svg = span.children[0];
	// replace the path with the default one
	svg.innerHTML = defaultPath;
	// add a class to the svg element
	svg.classList.add("ca-no-distractions");
	console.log("🎈replaced the svg");
}


// This function updates the svg element on WhatsApp Web
// This will avoid me to see the unread messages and notifications
// I will not see status on whatsapp until I open the web app and click on the status tab
async function main () {
    console.log('Hello from content script!');
    // wait for the element to appear
    await checkIfItHasUnread();
    // replace the svg element
	replacePathFromSvgStatus();
}

console.log("\n Running ca-no-distractions \n");
main();