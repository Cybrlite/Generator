// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

// This shows the HTML page in "ui.html".
figma.showUI(__uiFiles__.main, {width: 1000, height: 750,});

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage =  (msg: {type: string}) => {
  /*if (msg.type === 'name') {
    figma.showUI(__uiFiles__.name, {width: 1000, height: 750,});
  }*/
  if (msg.type === 'email') {
    figma.showUI(__uiFiles__.email, {width: 1000, height: 750,});
  }
  if (msg.type === 'phone') {
    figma.showUI(__uiFiles__.phone, {width: 1000, height: 750,});
  }
  if (msg.type === 'physical') {
    figma.showUI(__uiFiles__.physical, {width: 1000, height: 750,});
  }
  if (msg.type === 'lorem') {
    figma.showUI(__uiFiles__.lorem, {width: 1000, height: 750,});
  }
  if (msg.type === 'main') {
    figma.showUI(__uiFiles__.main, {width: 1000, height: 750,});
  }
  if (msg.type === 'close') {
    figma.closePlugin();
  }
}


/* figma.ui.onmessage =  (msg: {type: string, count: number}) => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === 'create-rectangles') {
    const nodes: SceneNode[] = [];
    for (let i = 0; i < msg.count; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 150;
      rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
}; */
