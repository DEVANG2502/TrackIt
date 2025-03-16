// mapbox-gl-csp-worker.js
// This file is designed to be used as a raw string import in your React component.

(() => {
    'use strict';
  
    let mapboxgl;
  
    // Check if running in a worker context
    if (typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
      // Worker context
      mapboxgl = {
        workerClass: () => {
          // This is a no-op in the worker context as the worker itself is the worker
          return self;
        },
      };
  
      // Import mapbox-gl from CDN or local file
      importScripts('https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js');
  
      // Override the worker creation to use the current worker
      mapboxgl.workerClass = () => self;
  
      // Listen for messages from the main thread
      self.addEventListener('message', (event) => {
        // Forward the message to mapbox-gl
        mapboxgl.onmessage(event);
      });
  
      // Override the postMessage function to send messages back to the main thread
      mapboxgl.postMessage = (data, transfer) => {
        self.postMessage(data, transfer);
      };
  
      // Override the addEventListener function to listen for events from mapbox-gl
      mapboxgl.addEventListener = (type, listener) => {
        self.addEventListener(type, listener);
      };
  
      // Override the removeEventListener function to remove event listeners
      mapboxgl.removeEventListener = (type, listener) => {
        self.removeEventListener(type, listener);
      };
  
      // Override the importScripts function to prevent it from being used
      mapboxgl.importScripts = () => {
        console.warn('mapbox-gl: importScripts is not allowed in a worker context');
      };
  
      // Expose mapboxgl to the global scope
      self.mapboxgl = mapboxgl;
    } else {
      // Non-worker context (main thread)
      mapboxgl = {
        workerClass: () => {
          // This function will be overridden in the main thread
          // to create a new worker from the raw string import
          return new Worker(URL.createObjectURL(new Blob(['(' + arguments.callee.toString() + ')()'], { type: 'application/javascript' })));
        },
        onmessage: () => {},
        postMessage: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        importScripts: () => {},
      };
  
      // Expose mapboxgl to the global scope
      window.mapboxgl = mapboxgl;
    }
  })();