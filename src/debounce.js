// Debounce is used when we want to reduce the unnecessary api calls on user events. 
// For example, a search box fires an api every time a key is pressed affecting the performance of the app. Calling api's on scroll or resizing the window is also performance intensive.

// Debouncing function takes two arguments first is the function that needs to be called and second is the delay i.e. the delay here means if the event occurs after the given delay api should be called.

function debounce (fn, delay) {
    let timeout = 0;
    const context = this,
    args = arguments;
    clearTimeout(timer);
    return function {
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}

const getData = () => {
    console.log('Fetching Data');

}

// debouncedFunction can be now called on keyup event, scroll or window resizing events
const debouncedFunction = debounce(getData, 300);