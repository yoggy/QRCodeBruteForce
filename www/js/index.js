
/////////////////////////////////////////////////////////////////////////////////////////
// for cordova

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
		console.log("onDeviceReady()");
    }
};

app.initialize();

/////////////////////////////////////////////////////////////////////////////////////////

var w = 300;
var h = 300;

// qrcode.js https://davidshimjs.github.io/qrcodejs/
var qrcode = new QRCode(
    document.getElementById("qrcode-container"),
    {
        id: "qrcode",
        text: "",
        width: w,
        height: h,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    }
);

function qrcode_update() {
    qrcode.clear();
    qrcode.makeCode(text_input_component.text);
}

// vue.js https://jp.vuejs.org/
var text_input_component = new Vue({
    el: '#text_input_component',
    data: {
        text : ""
    },
    methods: {
        on_update : function () {
        }
    }
});

function nfs(n, d) {
    const padding = "0".repeat(d);
    const msg = (padding + n).slice(-d);
    return msg;
}

// 
setInterval(function() {
    const d = new Date();
    const msg = 
            "" 
            + nfs(d.getFullYear(), 4)
            + nfs(d.getMonth(), 2)
            + nfs(d.getDate(), 2)
            + nfs(Math.floor(Math.random() * Math.floor(999999)), 6)
            + nfs(Math.floor(Math.random() * Math.floor(9999)), 4)            
    text_input_component.text = msg;
    qrcode_update();
}, 50);
