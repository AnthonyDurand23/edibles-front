const subscribe = () => {
  if (!('serviceWorker' in navigator)) {
    console.log('No service worker');
    // Service Worker isn't supported on this browser, disable or hide UI.
    return;
  }
  if (!('PushManager' in window)) {
    console.log('Push is not supported');
    // Push isn't supported on this browser, disable or hide UI.
    return;
  }
  registerServiceWorker();
};
// Register the service worker
const registerServiceWorker = async () => {
  try {
    // Register serice worker on the browser
    const registration = await navigator.serviceWorker.register(`./serviceWorker.js`);
    console.log('Service worker successfully registered.');
    // If the service worker exist we skip else we subscribe user
    registration.addEventListener('updatefound', async () => {
      console.log(registration);
      const subscribeOptions = {
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array('BE536FboZHOe0TWeBnr1EyAPNp7knmett8515NS5YSPMzyb7nB32dwi3Y11I3uvQz-4M2oII_MRvwyOfK0BdJ80'),
      };
      await navigator.serviceWorker.ready;
      const pushSubscription = await registration.pushManager.subscribe(subscribeOptions);

      console.log('Received PushSubscription: ', JSON.stringify(pushSubscription));

      await fetch('https://uther-edibles.herokuapp.com/subscribe', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token'),
        },
        method: 'POST',
        body: JSON.stringify(pushSubscription),
      });
    });
  } catch (error) {
    console.log(error);
  }
};
const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};
