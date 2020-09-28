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
    // "Custom Element" anchor requires predefined HTML element
    // which need to be created before data load
    var text0 = document.createElement("span");
    text0.id = "text0";
    text0.style.position = "absolute";
    text0.style.backgroundColor = "transparent";
    text0.style.color = "black";
	text0.style.font = "italic bold 13px arial,serif"; 
    text0.style.width = "150px";
	text0.style.height = "150px";
    //text0.style.backgroundImage = "url('image.png')";
    text0.style.visibility = "hidden";
    text0.innerHTML = "Assisting impoverished families and communities with affordable legal advice and counseling";
    document.body.appendChild(text0);
	//
	var text1 = document.createElement("span");
    text1.id = "text1";
    text1.style.position = "absolute";
    text1.style.backgroundColor = "transparent";
    text1.style.color = "black";
	text1.style.font = "bold 16px arial,serif"; 
    text1.style.width = "300px";
	text1.style.height = "75px";
    text1.style.visibility = "hidden";
    text1.innerHTML = "DIVORCE INFORMATION";
    document.body.appendChild(text1);
	//
	var text2 = document.createElement("span");
    text2.id = "text2";
    text2.style.position = "absolute";
    text2.style.backgroundColor = "transparent";
    text2.style.color = "black";
	text2.style.font = "12px Helvetica,serif"; 
    text2.style.width = "400px";
	text2.style.height = "225px";
    text2.style.visibility = "hidden";
    text2.innerHTML = "Married couples can dissolve their marriage through divorce. This ends the marriage and the divorced parties can legally marry again.";
    document.body.appendChild(text2);
	//
	var text3 = document.createElement("span");
    text3.id = "text3";
    text3.style.position = "absolute";
    text3.style.backgroundColor = "transparent";
    text3.style.color = "black";
	text3.style.font = "bold 12px Helvetica,serif"; 
    text3.style.width = "400px";
	text3.style.height = "150px";
    text3.style.visibility = "hidden";
    text3.innerHTML = "The divorce process will depend on whether the marriage is a civil marriage or a customary marriage:";
    document.body.appendChild(text3);
	//
	var text4 = document.createElement("span");
    text4.id = "text4";
    text4.style.position = "absolute";
    text4.style.backgroundColor = "transparent";
    text4.style.color = "black";
	text4.style.font = "12px Helvetica,serif"; 
    text4.style.width = "400px";
	text4.style.height = "75px";
    text4.style.visibility = "hidden";
    text4.innerHTML = "1). Civil marriages are dissolved according to the rules and procedures set out in the Divorce Act. \r\n  <br> 2). Marriages in terms of African Customary Law are dissolved according to the civil law but some of the consequences are determined by custom and tradition. \r\n <br/> 3). Muslim and Hindi marriages are dissolved in terms of the rites and rituals of the religion.";
    document.body.appendChild(text4);
	//
	var text5 = document.createElement("span");
    text5.id = "text5";
    text5.style.position = "absolute";
    text5.style.backgroundColor = "transparent";
    text5.style.color = "black";
	text5.style.font = "bold 12px Helvetica,serif"; 
    text5.style.width = "400px";
	text5.style.height = "150px";
    text5.style.visibility = "hidden";
    text5.innerHTML = "There are a number of issues that need to be addressed in a divorce, including:";
    document.body.appendChild(text5);
	//
	var text6 = document.createElement("span");
    text6.id = "text6";
    text6.style.position = "absolute";
    text6.style.backgroundColor = "transparent";
    text6.style.color = "black";
	text6.style.font = "12px Helvetica, serif"; 
    text6.style.width = "400px";
	text6.style.height = "75px";
    text6.style.visibility = "hidden";
    text6.innerHTML = "1). primary care of the children ñ custody before the new childrenís act. <br> 2). contact with the children ñ access before the new childrenís act <br> 3). maintenance <br> 4). dividing up property";
    document.body.appendChild(text6);
	//
	var text7 = document.createElement("span");
    text7.id = "text7";
    text7.style.position = "absolute";
    text7.style.backgroundColor = "transparent";
    text7.style.color = "black";
	text7.style.font = "bold 16px arial,serif"; 
    text7.style.width = "400px";
	text7.style.height = "75px";
    text7.style.visibility = "hidden";
    text7.innerHTML = "PRIMARY CARE OF THE CHILDREN";
    document.body.appendChild(text7);
	//
	var text8 = document.createElement("span");
    text8.id = "text8";
    text8.style.position = "absolute";
    text8.style.backgroundColor = "transparent";
    text8.style.color = "black";
	text8.style.font = "12px Helvetica, serif"; 
    text8.style.width = "400px";
	text8.style.height = "225px";
    text8.style.visibility = "hidden";
    text8.innerHTML = "Before the court will issue a divorce, it has to be decided who will look after the children. The parents can make an agreement or the court can decide. This is where the Family Law Clinic can assist in helping you determine what is in the best interests of your child which is the most important consideration. The Family Advocate at the court can help investigate which parent is in the best position to look after the children and will represent the children in the court if necessary. <br><br> If the divorce is taking a long time (for example if the parties don't agree) then an interim care and contact order can be issued setting out who will look after the children while the divorce is being finalised. This is done by way of an application to Court. <br><br> In African, Hindu and Muslim customary marriages, the wife usually takes custody of the children. According to African customary law, the father usually remains the children's natural guardian. The children of Hindu and Muslim marriages are regarded as illegitimate, so the mother is also the natural guardian. In all cases, the father still has a duty to support the children.";
    document.body.appendChild(text8);
	//
	var text9 = document.createElement("span");
    text9.id = "text9";
    text9.style.position = "absolute";
    text9.style.backgroundColor = "transparent";
    text9.style.color = "black";
	text9.style.font = "bold 16px arial,serif"; 
    text9.style.width = "400px";
	text9.style.height = "75px";
    text9.style.visibility = "hidden";
    text9.innerHTML = "CONTACT WITH THE CHILDREN";
    document.body.appendChild(text9);
	//
	var text10 = document.createElement("span");
    text10.id = "text10";
    text10.style.position = "absolute";
    text10.style.backgroundColor = "transparent";
    text10.style.color = "black";
	text10.style.font = "12px Helvetica, serif"; 
    text10.style.width = "400px";
	text10.style.height = "225px";
    text10.style.visibility = "hidden";
    text10.innerHTML = "The parent who is not the primary carer usually still wants contact with their children. There therefore needs to be an agreement about when, where and how this parent will have contact with the children. If it is not in the best interests of the children, then the court can restrict contact or allow contact under supervision.";
    document.body.appendChild(text10);
	//
	var text11 = document.createElement("span");
    text11.id = "text11";
    text11.style.position = "absolute";
    text11.style.backgroundColor = "transparent";
    text11.style.color = "black";
	text11.style.font = "bold 16px arial,serif"; 
    text11.style.width = "400px";
	text11.style.height = "75px";
    text11.style.visibility = "hidden";
    text11.innerHTML = "MAINTENANCE";
    document.body.appendChild(text11);
	//
	var text12 = document.createElement("span");
    text12.id = "text12";
    text12.style.position = "absolute";
    text12.style.backgroundColor = "transparent";
    text12.style.color = "black";
	text12.style.font = "12px Helvetica, serif"; 
    text12.style.width = "400px";
	text12.style.height = "225px";
    text12.style.visibility = "hidden";
    text12.innerHTML = "When a couple gets divorced, one party is often in a better financial position than the other. The person who is primary carer of the children will also have expenses that the other parent does not have. The court will issue a maintenance order requiring maintenance to be paid for the children and, depending on the circumstances, to the other party-spousal maintenance. <br><br> Maintenance for the children is paid to the parent who has care of the child (but it is important to remember that this is the child's right and not the parent's). All parents have a duty to support their children, including children who are illegitimate. Maintenance will be payable to the other parent until the child becomes a major at the age of 18. <br><br> If there are problems with maintenance after the divorce has gone through, these can be taken to the Maintenance officer at the Magistrates Court. Whether one party will have to pay maintenance or support to the other party depends on the circumstances. If the parties cannot agree on how much should be paid then the court will decide. <br><br> Because Hindu or Muslim marriages are not fully recognised as legal marriages, the wife has no legal status to claim support for herself after divorce but the duty of support for the children by both parents remains.";
    document.body.appendChild(text12);
	//
	var text13 = document.createElement("span");
    text13.id = "text13";
    text13.style.position = "absolute";
    text13.style.backgroundColor = "transparent";
    text13.style.color = "black";
	text13.style.font = "bold 16px arial,serif"; 
    text13.style.width = "400px";
	text13.style.height = "75px";
    text13.style.visibility = "hidden";
    text13.innerHTML = "DIVISION OF PROPERTY";
    document.body.appendChild(text13);
	//
	var text14 = document.createElement("span");
    text14.id = "text14";
    text14.style.position = "absolute";
    text14.style.backgroundColor = "transparent";
    text14.style.color = "black";
	text14.style.font = "12px Helvetica, serif"; 
    text14.style.width = "400px";
	text14.style.height = "225px";
    text14.style.visibility = "hidden";
    text14.innerHTML = "How the family property will be divided up depends on what property regime the couple adopted when they got married. This will usually be covered in the ante-nuptial agreement if there is one or, if there is no pre-marital contract, then it is determined by law. The default legal position is that civil marriages are in community of property with accrual. This means that everything that you own is shared, including property and debts. Accrual means that everything that you earn or buy after you have married also becomes part of the joint estate. If you get divorced, the shared property is divided equally between you. Any debts are also shared. <br><br> If you sign an ante-nuptial agreement, you can choose to get married: <br><br> 1). in community of property <br><br> 2). out of community of property without accrual <br><br> 3). out of community of property with accrual. <br><br> If the marriage is out of community of property without accrual, then each person keeps their own property from before the marriage and keeps whatever they earn or acquire during the marriage. <br><br> If the marriage is out of community of property with accrual then each person keeps their own property from before the marriage but anything that is accumulated during the marriage is shared. Some things, like inheritances or gifts remain separate. <br><br> The default property regime has changed for different people at different times. The laws that were in place when you got married will determine what property regime applies to your marriage. <br><br> 1). Dissolving a civil marriage. <br><br> 2). Dissolving a marriage in terms of African Customary Law. <br><br> 3). Dissolving a marriage in terms of the Muslim and Hindu religions.";
    document.body.appendChild(text14);
	//
	var text15 = document.createElement("span");
    text15.id = "text15";
    text15.style.position = "absolute";
    text15.style.backgroundColor = "transparent";
    text15.style.color = "black";
	text15.style.font = "bold 16px arial,serif"; 
    text15.style.width = "400px";
	text15.style.height = "75px";
    text15.style.visibility = "hidden";
    text15.innerHTML = "DISSOLVING A CIVIL MARRIAGE";
    document.body.appendChild(text15);
	//
	var text16 = document.createElement("span");
    text16.id = "text16";
    text16.style.position = "absolute";
    text16.style.backgroundColor = "transparent";
    text16.style.color = "black";
	text16.style.font = "12px Helvetica, serif"; 
    text16.style.width = "400px";
	text16.style.height = "225px";
    text16.style.visibility = "hidden";
    text16.innerHTML = "A civil marriage needs to be dissolved by a court. <br><br> You can only get a divorce if you show the court that there has been an ''irretrievable breakdown'' of the marriage or that one of the spouses is mentally ill or continuously unconscious. You can get divorced if your partner has been unconscious for at least six months and doctors don't believe that they will ever recover. You can get a divorce if your partner has been institutionalised for mental illness for at least two years and doctors don't think that they will ever recover. <br><br> Irretrievable breakdown means that the couple can no longer live together and there is no reasonable chance of them resolving their differences. Proof of this can include evidence showing that: <br><br> 1). The couple have not lived together for a while. <br><br> 2). One partner cheated on the other. <br><br> 3). One partner left the other. <br><br> 4). One partner abused the other. <br><br> 5). The couple no longer love each other.";
    document.body.appendChild(text16);
	//
	var text17 = document.createElement("span");
    text17.id = "text17";
    text17.style.position = "absolute";
    text17.style.backgroundColor = "transparent";
    text17.style.color = "black";
	text17.style.font = "bold 16px arial,serif"; 
    text17.style.width = "400px";
	text17.style.height = "75px";
    text17.style.visibility = "hidden";
    text17.innerHTML = "THE DIVORCE PROCESS";
    document.body.appendChild(text17);
	//
	var text18 = document.createElement("span");
    text18.id = "text18";
    text18.style.position = "absolute";
    text18.style.backgroundColor = "transparent";
    text18.style.color = "black";
	text18.style.font = "12px Helvetica, serif"; 
    text18.style.width = "400px";
	text18.style.height = "225px";
    text18.style.visibility = "hidden";
    text18.innerHTML = "If you want to ask the court to issue a divorce you need to prepare a summons dealing with: <br><br> 1). Who will have care of the children? <br><br> 2). How the parent who does not have care will access the children. <br><br> 3). Who will receive maintenance, how much it will be and how and when it will be paid. <br><br> 4). How your property will be divided up. <br><br> If you and your partner can reach a settlement agreement before the summons is issued, this will make the process much quicker and easier. If you reach an agreement, you should write it down and sign it. This consent paper should then be attached to the divorce summons. A hearing date will be set. At this hearing, the judge will ask questions to confirm the information in the summons. Once everything is settled, a divorce order will be granted.";
    document.body.appendChild(text18);
	//
	var text19 = document.createElement("span");
    text19.id = "text19";
    text19.style.position = "absolute";
    text19.style.backgroundColor = "transparent";
    text19.style.color = "black";
	text19.style.font = "bold 16px arial,serif"; 
    text19.style.width = "400px";
	text19.style.height = "75px";
    text19.style.visibility = "hidden";
    text19.innerHTML = "DISSOLVING A MARRIAGE IN TERMS OF AFRICAN CUSTOMARY LAW";
    document.body.appendChild(text19);
	//
	var text20 = document.createElement("span");
    text20.id = "text20";
    text20.style.position = "absolute";
    text20.style.backgroundColor = "transparent";
    text20.style.color = "black";
	text20.style.font = "12px Helvetica, serif"; 
    text20.style.width = "400px";
	text20.style.height = "225px";
    text20.style.visibility = "hidden";
    text20.innerHTML = "Customary marriages are similar to civil marriages in that the court must issue the divorce order and the divorce will only be granted if there are grounds for divorce (that is irretrievable breakdown, mental illness or continuous unconsciousness). The parties can decide the terms of the divorce and then the judge will issue the relevant orders regarding care and maintenance. If the court has to decide on these matters it will take into account any arrangements that may have been made in terms of customary law. <br><br> The wife's family may have to return all or part of the lobola to the husband's family, unless the husband publicly rejected his wife for no reason at all.";
    document.body.appendChild(text20);
	//
	var text21 = document.createElement("span");
    text21.id = "text21";
    text21.style.position = "absolute";
    text21.style.backgroundColor = "transparent";
    text21.style.color = "black";
	text21.style.font = "bold 16px arial,serif"; 
    text21.style.width = "400px";
	text21.style.height = "75px";
    text21.style.visibility = "hidden";
    text21.innerHTML = "DISSOLVING A MARRIAGE IN TERMS OF THE MUSLIM AND HINDU RELIGIONS";
    document.body.appendChild(text21);
	//
	var text22 = document.createElement("span");
    text22.id = "text22";
    text22.style.position = "absolute";
    text22.style.backgroundColor = "transparent";
    text22.style.color = "black";
	text22.style.font = "12px Helvetica, serif"; 
    text22.style.width = "400px";
	text22.style.height = "225px";
    text22.style.visibility = "hidden";
    text22.innerHTML = "If a man and woman were married by an Imam in the Muslim religion or a priest in the Hindu religion, they are not married in terms of the civil law. They can then divorce without going to court but they must follow the rules of their respective religions.";
    document.body.appendChild(text22);
	//
	var text23 = document.createElement("span");
    text23.id = "text23";
    text23.style.position = "absolute";
    text23.style.backgroundColor = "white";
    text23.style.color = "blue";
	text23.style.font = "12px Helvetica, serif"; 
    text23.style.width = "75px";
	text23.style.height = "430px";
    text23.style.visibility = "hidden";
    text23.innerHTML = "EMERGENCY <br> SAPS <br> 10111 <br><br> Family Violence <br> Child Abuse <br> Sexual Offence <br> 012 393 2363 <br><br> CRIME STOP <br> 0860 010 111 <br><br> Women Abuse <br> 0800 150 150 <br><br> Childline <br> 0800 055 555 <br><br> AIDS Helpline <br> 0800 012 322 <br> 011 725 6710 <br> ";
    document.body.appendChild(text23);
	//
	var text24 = document.createElement("span");
    text24.id = "text24";
    text24.style.position = "relative";
    text24.style.backgroundColor = "white";
    text24.style.color = "red";
	text24.style.font = "12px Helvetica, serif"; 
    text24.style.width = "225px";
	text24.style.height = "50px";
    text24.style.visibility = "hidden";
    text24.innerHTML = "Luke 18:15-17 '“Let the children come to me, do not hinder them, for to such belongs the kingdom of God.”'";
    document.body.appendChild(text24);
	
	var text = document.createElement("h1");
    text.id = "text";
	text.style.font = "16px arial, serif";
    text.style.position = "absolute";
	//cause.style.backgroundColor = "transparent";
    text.style.backgroundColor = "white";
    text.style.color = "white";
    text.style.padding = "5px";
    text.style.visibility = "hidden";
    //text.innerHTML = "Get Skype";
    document.body.appendChild(text);
	
	var cause = document.createElement("h2");
    cause.id = "cause";
	cause.style.font = "16px arial, serif";
    cause.style.position = "absolute";
    //cause.style.backgroundColor = "transparent";
    cause.style.color = "white";
    cause.style.padding = "12px";
    cause.style.visibility = "hidden";
    cause.innerHTML = "Law with a cause - to the benefit of all South Africans";
    document.body.appendChild(cause);
	
    var fs_div = document.createElement("div");
    fs_div.id = "facebook";
    fs_div.style.position = "absolute";
    fs_div.style.width = "52px";
	fs_div.style.height = "53px";
    fs_div.style.backgroundImage = "url('facebook.png')";
    fs_div.style.visibility = "hidden";
    document.body.appendChild(fs_div);
	//
	var s_div = document.createElement("div");
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
    m_data.load(APP_ASSETS_PATH + "divorce_info.json", load_cb, preloader_cb);
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
	myFunction();
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
    cyl_text.innerHTML = "Scroll";
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
		
    //canvas_elem.addEventListener("mousedown", main_canvas_click, false);
    //canvas_elem.addEventListener("touchstart", main_canvas_click, false);
		
	});	
	//m_scs.set_active("Scene.001");
//*/
}
})
///*
function myFunction() {
  var str = "Get Skype";
  var result = str.link("https://www.skype.com/en/get-skype/");
  document.getElementById("text").innerHTML = result;
}
//Slider========================================================
function create_slider() {
	var slider = document.createElement("INPUT");
    slider.id = "slider_id";
    slider.setAttribute("type", "range");
    slider.setAttribute("min", "-1");
    slider.setAttribute("max", "39");
    slider.setAttribute("value", "0");
    slider.style.position = "relative";
    slider.style.width = "94%";
    document.body.appendChild(slider);
}
//*/
b4w.require("my_project").init();
