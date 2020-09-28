"use strict"

b4w.register("my_project", function(exports, require) {
// import modules used by the app
var m_app       = b4w.require("app");
var m_cfg       = b4w.require("config");
var m_data      = b4w.require("data");
var m_preloader = b4w.require("preloader");
///*
var m_ver       = b4w.require("version");
var m_anim      = b4w.require("animation");
var m_cont      = b4w.require("container");
var m_mouse     = b4w.require("mouse");
var m_anchors   = b4w.require("anchors");
var m_scs       = b4w.require("scenes");
var m_trans     = b4w.require("transform");
var m_logic_n   = b4w.require("logic_nodes");
var _previous_selected_obj = null;
//*/
var DEBUG = true;

// задаем путь к ассетам
var APP_ASSETS_PATH = "assets/";
// задаем путь к физическому движку
m_cfg.set("physics_uranium_path", "node_modules/blend4web/dist/uranium/")

/**
 * экспотрируем метод инициализации, который будет вызван в самом конце файла
 */
exports.init = init;
function init() {
    m_app.init({
        canvas_container_id: "main_canvas_container",
        callback: init_cb,
        show_fps: DEBUG,
        console_verbose: DEBUG,
        autoresize: true
    });
}

/**
 * коллбэк вызывается когда приложение инициализировалось
 */
function init_cb(canvas_elem, success) {

    if (!success) {
        console.log("b4w init failure");
        return;
    }
///*
	var text = document.createElement("span");
    text.id = "text";
    text.style.position = "absolute";
    text.style.backgroundColor = "blue";
    text.style.color = "white";
    text.style.padding = "5px";
    text.style.visibility = "hidden";
    text.innerHTML = "Get Skype";
    document.body.appendChild(text);
    var fs_div = document.createElement("div");
    fs_div.id = "facebook";
    fs_div.style.position = "absolute";
    fs_div.style.width = "52px";
	fs_div.style.height = "53px";
    fs_div.style.backgroundImage = "url('facebook.png')";
    fs_div.style.visibility = "hidden";
    document.body.appendChild(fs_div);
	var s_div = document.createElement("h1");
    s_div.id = "skype";
    s_div.style.position = "absolute";
    s_div.style.width = "51px";
	s_div.style.height = "51px";
    s_div.style.backgroundImage = "url('skype.png')";
    s_div.style.visibility = "hidden";
    document.body.appendChild(s_div);
//*/
    m_preloader.create_preloader();
    // игнорируем клик правой кнопкой мыши на элементе canvas
    canvas_elem.oncontextmenu = function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    };
    load();
}

/**
 * загрузка данных сцены
 */
function load() {
    m_data.load(APP_ASSETS_PATH + "dom_vio.json", load_cb, preloader_cb);
}

/**
 * обновление прелоадера
 */
function preloader_cb(percentage) {
    m_preloader.update_preloader(percentage);
}

/**
 * коллбэк вызывается когда сцена загружена
 */
function load_cb(data_id, success) {

    if (!success) {
        console.log("b4w load failure");
        return;
    }

    m_app.enable_camera_controls();

///*
	//Slider========================================================
	create_slider();
	var my_slider = document.getElementById("slider_id");
	var Empty = m_scs.get_object_by_name("Empty");
	m_trans.set_translation(Empty, 0, 0, my_slider.value/250);
	// Update the current slider value (each time you drag the slider handle)
	my_slider.oninput = function() {
		m_trans.set_translation(Empty, 0, 0, this.value/1);
	}
	//Slider========================================================
    m_app.enable_camera_controls(false, false, false, null, true);

    //
    // "Generic" anchor may be created (or replaced) anytime
    var cyl_text = document.createElement("span");
    cyl_text.id = "anchor";
    cyl_text.style.position = "absolute";
    cyl_text.style.backgroundColor = "yellow";
    cyl_text.style.color = "black";
    cyl_text.style.padding = "5px";
    cyl_text.innerHTML = "Header (Generic)";
    document.body.appendChild(cyl_text);

    var txt_anchor = m_scs.get_object_by_name("txtAnchor");
	
    // "Generic" anchor may be created (or replaced) anytime
    var cyl_div = document.createElement("div");
    cyl_div.id = "cyl_anchor";
    cyl_div.style.position = "absolute";
    cyl_div.style.textAlign = "center";
    cyl_div.style.verticalAlign = "middle";
    cyl_div.style.paddingTop = "60px";
    cyl_div.style.width = "200px";
	cyl_div.style.height = "140px";
    cyl_div.style.backgroundImage = "url('image.png')";
    cyl_div.innerHTML = "Dynamic Text (Generic)";
    document.body.appendChild(cyl_div);

    var cyl_anchor = m_scs.get_object_by_name("CylAnchor");

    m_anchors.attach_move_cb(cyl_anchor, function(x, y, appearance, obj, elem) {
        var anchor_elem = document.getElementById("cyl_anchor");
        anchor_elem.style.left = x + "px";
        anchor_elem.style.top = y + "px";

        if (appearance == "visible")
            anchor_elem.style.visibility = "visible";
        else
            anchor_elem.style.visibility = "hidden";
		
    canvas_elem.addEventListener("mousedown", main_canvas_click, false);
    canvas_elem.addEventListener("touchstart", main_canvas_click, false);
	//	
	});	
	//m_scs.set_active("Scene.001");
//*/
}
})
///*
//Slider========================================================
function create_slider() {
	var slider = document.createElement("INPUT");
    slider.id = "slider_id";
    slider.setAttribute("type", "range");
    slider.setAttribute("min", "-0");
    slider.setAttribute("max", "29");
    slider.setAttribute("value", "0");
    slider.style.position = "relative";
    slider.style.width = "33%";
    document.body.appendChild(slider);
}
//Slider========================================================
//*/
b4w.require("my_project").init();
