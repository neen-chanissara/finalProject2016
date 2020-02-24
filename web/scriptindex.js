var type1 = ["กระถินณรงค์","กระถินพิมาน","กระถินณรงค์เงิน","กระทิง","กระดังงาไทย"
                ,"กระทุ่มนา","กุ่มน้ำ","กุ่มบก","กันเกรา","กาฬพฤกษ์","กัลปพฤกษ์","แก้วเจ้าจอม"
                ,"แคแสด","แคฝรั่ง","คอเดีย","จำปา","จำปี","จิกน้ำ","จามจุรี","จัน-อิน","ชงโค"
                ,"ชมพูพันธุ์ทิพย์","ตะลิงปริง","ตะขบไทย","ตะแบกนา","แต้ว","ทองกวาว","ทองหลางลาย"
                ,"นนทรี","นิโครธ","บุนนาค","ประดู่แดง","ประดู่อินเดีย","ปีป","ปีปทอง","ฝ้ายคำซ้อน"
                ,"พยุง","พยอม","พิกุล","พี้จัน","พฤกษ์","มะตาด","มะกอกน้ำ","มะขาม","มะพูด"
                ,"มะหาด","มะฮอกกานีใบใหญ่","มะฮอกกานีใบเล็ก","โมกมัน","ราชพฤกษ์ (คูน)","ลั่นทมแดง"
                ,"ลั่นทมขาว","ลำดวน","ลูกปืนใหญ่","เหลืองอินเดีย","ตีนเป็ดน้ำ","ตีนเป็ด","ศรีตรัง"
                ,"สุพรรณิการ์","เสลา","เสี้ยวดอกขาว","สารภี","ยางอินเดีย","ไทรย้อยใบแหลม","ไทรจีน"
                ,"ไทรสามเหลี่ยม","ไทรเรกูล่า","หลิว","หางนกยูงฝรั่ง","อินทนินบก"];
            var types1 = [];
            for(var i =0;i<70;i++){
                types1[i] = false;
            }
            var type2 = ["กรรณิการ์","กระถินหางกระจอก","กุหลาบ","กระดังงาสงขลา","กาหลง"
                ,"ชาฮกเกี้ยน(ชาปัตตาเวีย)","แก้ว","โกสน","เข็มม่วง","เข็มเศรษฐี","เข็มแดง","เข็มญี่ปุ่น"
                ,"เข็มขาว","เข็มอุณากรรณ","เข็มเหลือง","ไข่ดาว","คำเงาะ","คริสต์มาสซ้อน","โคลงเคลง"
                ,"ตันหยง","ชบา","ชบาจีน","ชบาหนู","ช่อม่วงหรือเทียนหยด","ชุมเห็ดเทศ","ช้องนาง"
                ,"ช้องแมว","ชวนชม","ดอนย่า","ทองพันชั่ง","ทรงบาดาล","เทียนกิ่ง","ทับทิมหนู"
                ,"ไทรยอดทอง","ทองอุไร","นมแมว","นมสวรรค์","บานเช้าเหลือง","บานเช้า","บัวสวรรค์"
                ,"ประทัดฟิลิปปินส์","ประทัดจีน","ประยงค์","แปรงล้างขวด","ผกากรอง","พุดฝรั่ง (พุดลา)"
                ,"พู่ชมพู","พู่หมวก","พู่เรือหงษ์","พุดตาล","พุดซ้อน","พุดตะแคง","พวงทองต้น"
                ,"พวงแสดต้น","พยับหมอก","มะเขือนมนาง","มะลิซ้อน-ลา","มุจลินทร์","โมกบ้าน","ยี่โถ"
                ,"ยี่เข่ง","ยี่หุบ","ราตรี","ราตรีสีทอง","รำเพย","รองผึ้ง","รัก (ดอกรัก)","ราชาวดี"
                ,"รัตมา","ลำโพง","หลิวไต้หวัน","เล็บครุฑ","ส้านชะวา","แสงจันทร์","ข่อย","หางนกยูงไทย"
                ,"หางกระรอกแดง","หูปลาช่อน","อังกาบ","ออชน่า (มิกกี้เม้า)","ไฮแดรนเยีย"]; 
            var types2 = [];
            for(var i =0;i<81;i++){
                types2[i] = false;
            }
            var type4 = ["จั๋งไทย","จั๋งญี่ปุ่น","ตาลแดง","ตาลน้ำเงิน","ปาล์มจีน","ปาล์มจีบ","ปาล์มขวด"
                ,"ปาล์มบังสูรย์","ปาล์มแชมเปญ","ปาล์มเจ้าเมืองตัง","ปาล์มหนวด","ปาล์มพัด","ปาล์มน้ำมัน"
                ,"ปาล์มสามเหลี่ยม","ปาล์มไผ่","ปาล์มหางปลา","หมากเหลือง","หมากเขียว","หมากงาช้าง"
                ,"หมากนวล","หมากแดง","สิบสองปันนา","อินทผาลัม","ปลงไทย","ปลงญี่ปุ่น","ปลงเม็กซิกัน"
                ,"ไดอูน","เอนเซบพาโตส"];
            var types4 = [];
            for(var i =0;i<28;i++){
                types4[i] = false;
            }
            var type5 = ["สนสองใบ","สนสามใบ","สนฉัตร","สนทะเล","สนประดิพัทฐ์","สนข้าวเม่า"
                ,"สนอริโซนา","สนจีน","สนดินสอเขียว","สนแผง","สนแผงทอง","สนข้าวเปลือกต่าง"
                ,"สนเลื้อยญี่ปุ่น","สนสาหร่าย","สนสีฟ้าเลื้อย","สนแผงนานา","พญามะขามป้อม","สนญี่ปุ่น"];
            var types5 = [];
            for(var i =0;i<18;i++){
                types5[i] = false;
            }
            var type7 = ["อกาเว่","ป่านศรนารายณ์","เฟอร์เครีย","ต้นหัวโต","กุหลาบหิน","เข็มกุดั่น"
                ,"กระบองเพชร","กุหลาบพวงคราม","พระยาไร้ใบ","เขียวสลวย","โป้ยเซียน","ม้าลาย"
                ,"ลิ้นมังกร","ว่านงาช้าง"];
            var types7 = [];
            for(var i =0;i<14;i++){
                types7[i] = false;
            }
            var type8 = ["ปุยเมฆ","มรกตดำ","มรกตแดง","พิโลกอ","พิโลหลังแดง","พลูฉีกด่าง"
                ,"พลูฉลุ","ไผ่ฟิลิปปินส์","ราชินีหินอ่อน","หัวใจแนบ","ทองไหลมา","ออมเงิน-ออมทอง"
                ,"หน้าวัวใบ","แก้วหน้าม้า","กระดาษด่าง","เปเปอร์โรเมีย(ลายแตงโม)","เปเปอร์โรเมีย(ด่าง)"
                ,"บอนสี","ราชินีหินอ่อน","วาสนาเขียว-ธรรมดา","ดราซีน่าประกายเงิน","จันทผา","วาสนามังกรทอง"
                ,"เข็มสามสี","รวงทอง"];
            var types8 = [];
            for(var i =0;i<25;i++){
                types8[i] = false;
            }
            var type9 = ["เพชรชมพู","เพชรไพรินทร์","เพชรสายรุ้ง"];
            var types9 = [];
            for(var i =0;i<3;i++){
                types9[i] = false;
            }
            var type10 = ["โพธิบัลลังก์","เทาเงิน","กาบหยก","เสือพราน","โพธิเงินลาย","กวักทองคำ"];
            var types10 = [];
            for(var i =0;i<6;i++){
                types10[i] = false;
            }
            var type11 = ["กวักมรกต","นกกระทุมขาว","กวักเงินใหญ่","ช้างเผือก","เสือโคร่ง","รูดอล์ฟ"
                ,"สโนดรอป","อโมน่า"];
            var types11 = [];
            for(var i =0;i<8;i++){
                types11[i] = false;
            }
            var type12 = ["กาเหว่าลาย","ม้าลาย","แววมายุรา","เสน่ห์ขุนแผน","เสือรองนอน(เทพสุดา)","เทวมานัส"];
            var types12 = [];
            for(var i =0;i<6;i++){
                types12[i] = false;
            }
            var type13 = ["กล้วยบัว","กล้วยร้อยหวี","กล้วยพัด","ปักษาสวรรค์","ก้ามกุ้ง(ชูมาลัย)"
                ,"ก้ามกุ้ง(ชูบังอร)","สร้อยคัทลี","พุทธรักษา","พลับพลึง"];
            var types13 = [];
            for(var i =0;i<9;i++){
                types13[i] = false;
            }
            var type14 = ["ปริกหางกระรอก","โปร่งฟ้า","ปริก","เฟินก้านดำ","เฟินขกนก","เฟินข้าหลวง"
                ,"เฟินชายผ้าสีดา","เฟินใบมะขาม","เฟินเกล็ดหอย","เฟินก้างปลา","เฟินทอง","เฟินเงิน"
                ,"เฟินช้องนางคลี่","หางนกหว้า","เฟินบอสตัน","เฟินชายกระโปรง","เฟินปีกแมงทับ","เฟินใบกลีบ","เฟินต้น"];
            var types14 = [];
            for(var i =0;i<19;i++){
                types14[i] = false;
            }
            var type15 = ["กาบหอยแครง","ก้ามปูหลุด","กระดุมทองเลื้อย","คาดตะกั่ว","คาตทับทิม"
                ,"ริบบิ้นดำ","เบญจรงค์","แมลงสาบ","ผกากรองเหลือง","ผกากรองม่วงเลื้อย","ผักโขมแดง"
                ,"ผักเป็ดแดง","การะเกด","พรมกำมะหยี่","แพงพวย","ฤาษีผสม","แพรเซี่ยงไฮ้","ซุ้มกระต่าย"
                ,"เศรษฐีเรือนนอก-ใน","หนวดปลาดุก","หัวใจม่วง","หญ้าด่าง","แอหนัง"];
            var types15 = [];
            for(var i =0;i<23;i++){
                types15[i] = false;
            }
            var type16 = ["กล็อกซิเนีย","บานเย็น","บานชื่น","แซลเวีย","ปากนกกระเรียน","แสงอรุณ"
                ,"เดือนฉาย","ดาวเรือง","ดาวกระจาย","รักเร่","พิกุลทอง","ทานตะวัน","ฟลอกซ์"
                ,"พิทูเนีย","หงอนไก่"];
            var types16 = [];
            for(var i =0;i<15;i++){
                types16[i] = false;
            }
            var type17 = ["ไผ่เพ็ก","ไผ่เหลือง","ไผ่เลี้ยง","ไผ่ทอง","ไผ่น้ำเต้า","ไผ่รวก","ไผ่รวกดำ"];
            var types17 = [];
            for(var i =0;i<7;i++){
                types17[i] = false;
            }
            var type18 = ["ตะเกียงแบบเตี้ย","ตะเกียงแบบสูงปานกลาง","ตะเกียงแบบสูง"];
            var types18 = [];
            for(var i =0;i<3;i++){
                types18[i] = false;
            }
            var type19 = ["หินหลัก","หินทรงสูง","หินค่อนข้างแบนราบ","หินทรงราบ","หินแง่ง"];
            var types19 = [];
            for(var i =0;i<5;i++){
                types19[i] = false;
            }
            var type20 = ["ไผ่ไล่กวาง"];
            var types20 = [];
            for(var i =0;i<1;i++){
                types20[i] = false;
            }
            var type22 = ["บ้านน้ำชา"];
            var types22 = [];
            for(var i =0;i<1;i++){
                types22[i] = false;
            }
            
            var move = 0; 
            var planb = [];
            for(var i = 1;i<97;i++){
                planb[i] = false;
            }
            var toolsb = [];
            for(var i = 1;i<31;i++){
                toolsb[i] = false;
            }
            var typedrop;
            var posname = [];
            var posx = [];
            var posy = [];
            var pos = 0;
            function showList() {
                var show = document.getElementById("showlist");
                var style = document.getElementById("listStyle");
                var listplan = document.getElementById("planchoose");
                if (show.style.display === "block"){
                    show.style.display = "none";
                    style.style.display = "none";
                    listplan.style.display = "none";
                }
                else
                    show.style.display = "block";
            }
            function showStyle() {
                var ct = document.getElementById("choosetools");
                var cc = document.getElementById("toolsb");
                var cp = document.getElementById("planchoose");
                var cs = document.getElementById("listStyle");
                if(cs.style.display === "initial")
                    cs.style.display = "none";
                else{
                    cs.style.display = "initial";
                    ct.style.display = "none";
                    cc.style.display = "none";
                    cp.style.display = "none";
                }
            }
            function showPlan() {
                var ct = document.getElementById("choosetools");
                var cc = document.getElementById("toolsb");
                var cp = document.getElementById("planchoose");
                var cs = document.getElementById("listStyle");
                if(cp.style.display === "initial")
                    cp.style.display = "none";
                else{
                    cp.style.display = "initial";
                    ct.style.display = "none";
                    cc.style.display = "none";
                    cs.style.display = "none";
                }
            }
            var nameplan;
            function choosePlan(picture){
                nameplan = picture.alt;
                var listplan = document.getElementById("planchoose");
                var rotateR = document.getElementById("rotateR");
                var rotateL = document.getElementById("rotateL");
                var ok = document.getElementById("okmanageplan");
                var planC = document.getElementById("plan");
                var okbutton = document.getElementById("okplan");
                var all = document.getElementById("allmanageplan");
                for(var i = 1;i<97;i++){
                    document.getElementById("b"+i).style.display = "block";
                    document.getElementById("b"+i).src = picture.src;
                }
                planC.style.display = "block";
                listplan.style.display = "none";
                rotateR.style.display = "initial";
                rotateL.style.display = "initial";
                ok.style.display = "initial";
                okbutton.style.display = "none";
                all.style.display = "none";
                move = 0;
                planC.style.webkitTransform = "rotate(0deg)";
                planC.style.mozTransform    = "rotate(0deg)";
                planC.style.msTransform     = "rotate(0deg)"; 
                planC.style.oTransform      = "rotate(0deg)"; 
                planC.style.transform       = "rotate(0deg)";
                for(var i = 1;i<97;i++){
                        var setall = document.getElementById("c"+i);
                        setall.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                        setall.style.display = "block";
                        setall.style.zIndex = "-1";
                        planb[i]=false;
                    }
            }
            function hideManage(){
                var rotateR = document.getElementById("rotateR");
                var rotateL = document.getElementById("rotateL");
                var ok = document.getElementById("okmanageplan");
                rotateR.style.display = "none";
                rotateL.style.display = "none";
                ok.style.display = "none";
            }
            function right(){
                var div = document.getElementById("plan");
                move=(move-90)%360;
                div.style.webkitTransform = "rotate("+move+"deg)";
                div.style.mozTransform    = "rotate("+move+"deg)";
                div.style.msTransform     = "rotate("+move+"deg)"; 
                div.style.oTransform      = "rotate("+move+"deg)"; 
                div.style.transform       = "rotate("+move+"deg)"; 
            }
            function left(){
                var pic = document.getElementById("plan");
                move=(move+90)%360;
                pic.style.webkitTransform = "rotate("+move+"deg)";
                pic.style.mozTransform    = "rotate("+move+"deg)";
                pic.style.msTransform     = "rotate("+move+"deg)"; 
                pic.style.oTransform      = "rotate("+move+"deg)"; 
                pic.style.transform       = "rotate("+move+"deg)"; 
            }
            function managePic(){
                hideManage();
                var okbutton = document.getElementById("okplan");
                var all = document.getElementById("allmanageplan");
                for(var i = 1;i<97;i++){
                    var set1 = document.getElementById("b"+i);
                    var set2 = document.getElementById("c"+i);
                    set1.style.display = "block";
                    set2.style.display = "block";
                }
                okbutton.style.display = "initial";
                all.style.display = "initial";             
            }
            function overb(block){
                var ok = document.getElementById("okplan");
                if(ok.style.display === "initial"){
                    var cut = block.id.substring(1);
                    var show = document.getElementById("c"+cut);
                    for(var i=1;i<97;i++){
                        if(nameplan==="1ai"){
                            var num = parseInt(cut);
                            if(num === i){
                                show.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                                show.style.zIndex = "1";
                            }
                            else{
                                if(!planb[i]){
                                    var hide = document.getElementById("c"+i);
                                    hide.style.zIndex = "-1";
                                }
                            }
                            if(i===28) i=32;
                            if(i===40) i=44;
                            if(i===52) i=56;
                            if(i===64) i=68;
                        }
                        else if(nameplan==="2ai"){
                            var num = parseInt(cut);
                            if(num === i){
                                show.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                                show.style.zIndex = "1";
                            }
                            else{
                                if(!planb[i]){
                                    var hide = document.getElementById("c"+i);
                                    hide.style.zIndex = "-1";
                                }
                            }
                            if(i===5) i=7;
                            if(i===17) i=19;
                            if(i===28) i=32;
                            if(i===40) i=44;
                            if(i===52) i=56;
                            if(i===64) i=68;
                        }
                        else if(nameplan==="3ai"){
                            var num = parseInt(cut);
                            if(num === i){
                                show.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                                show.style.zIndex = "1";
                            }
                            else{
                                if(!planb[i]){
                                    var hide = document.getElementById("c"+i);
                                    hide.style.zIndex = "-1";
                                }
                            }
                            if(i===4) i=8;
                            if(i===16) i=20;
                            if(i===28) i=32;
                            if(i===40) i=44;
                        }
                        else if(nameplan==="4ai"){
                            var num = parseInt(cut);
                            if(num === i){
                                show.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                                show.style.zIndex = "1";
                            }
                            else{
                                if(!planb[i]){
                                    var hide = document.getElementById("c"+i);
                                    hide.style.zIndex = "-1";
                                }
                            }
                            if(i===4) i=8;
                            if(i===16) i=20;
                            if(i===28) i=32;
                            if(i===40) i=44;
                            if(i===52) i=56;
                            if(i===64) i=68;
                            if(i===76) i=80;
                            if(i===88) i=92;
                        }
                        else if(nameplan==="5ai"){
                            if(i===1) i=5;
                            if(i===13) i=17;
                            if(i===25) i=29;
                            if(i===37) i=41;
                            if(i===49) i=53;
                            if(i===61) i=65;
                            if(i===73) i=77;
                            if(i===85) i=89;
                            var num = parseInt(cut);
                            if(num === i){
                                show.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                                show.style.zIndex = "1";
                            }
                            else{
                                if(!planb[i]){
                                    var hide = document.getElementById("c"+i);
                                    hide.style.zIndex = "-1";
                                }
                            }
                        }
                    }
                }
            }
            function outb(block){
                var ok = document.getElementById("okplan");
                var cut = block.id.substring(1);
                var cal = parseInt(cut);
                if(ok.style.display === "initial" && !planb[cal]){
                    var show = document.getElementById(block.id);
                    show.style.zIndex = "-1";
                }
            }
            function clickb(block){
                var ok = document.getElementById("okplan");
                var clicked = document.getElementById(block.id);
                var blocks = clicked.id;
                var cal = blocks.substring(1);
                var calcu = parseInt(cal);
                if(ok.style.display === "initial"){
                    if(!planb[calcu]){
                        clicked.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
                        clicked.style.zIndex = "1";
                    }
                    else{
                        clicked.style.zIndex = "-1";
                    }
                    planb[calcu]=!planb[calcu];
                }
            }
            
            function allManage(){
                if(nameplan === "1ai"){
                    for(var i = 1;i<97;i++){
                        var setall = document.getElementById("c"+i);
                        setall.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
                        setall.style.zIndex = "1";
                        planb[i]=true;
                        if(i===28) i=32;
                        if(i===40) i=44;
                        if(i===52) i=56;
                        if(i===64) i=68;
                    }
                }
                else if(nameplan === "2ai"){
                    for(var i = 1;i<97;i++){
                        var setall = document.getElementById("c"+i);
                        setall.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
                        setall.style.zIndex = "1";
                        planb[i]=true;
                        if(i===5) i=7;
                        if(i===17) i=19;
                        if(i===28) i=32;
                        if(i===40) i=44;
                        if(i===52) i=56;
                        if(i===64) i=68;
                    }
                }
                else if(nameplan === "3ai"){
                    for(var i = 1;i<97;i++){
                        var setall = document.getElementById("c"+i);
                        setall.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
                        setall.style.zIndex = "1";
                        planb[i]=true;
                        if(i===4) i=8;
                        if(i===16) i=20;
                        if(i===28) i=32;
                        if(i===40) i=44;
                    }
                }
                else if(nameplan === "4ai"){
                    for(var i = 1;i<97;i++){
                        var setall = document.getElementById("c"+i);
                        setall.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
                        setall.style.zIndex = "1";
                        planb[i]=true;
                        if(i===4) i=8;
                        if(i===16) i=20;
                        if(i===28) i=32;
                        if(i===40) i=44;
                        if(i===52) i=56;
                        if(i===64) i=68;
                        if(i===76) i=80;
                        if(i===88) i=92;
                    }
                }
                else if(nameplan === "5ai"){
                    for(var i = 1;i<97;i++){
                        if(i===1) i=5;
                        if(i===13) i=17;
                        if(i===25) i=29;
                        if(i===37) i=41;
                        if(i===49) i=53;
                        if(i===61) i=65;
                        if(i===73) i=77;
                        if(i===85) i=89;
                        var setall = document.getElementById("c"+i);
                        setall.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
                        setall.style.zIndex = "1";
                        planb[i]=true;
                    }
                }
            }
            function hideokplan(){
                var ok = document.getElementById("okplan");
                var all = document.getElementById("allmanageplan");
                ok.style.display = "none";
                all.style.display = "none";
                for(var i = 1;i<97;i++){
                    if(planb[i]===false){
                        var set1 = document.getElementById("b"+i);
                        var set2 = document.getElementById("c"+i);
                        set1.style.display = "none";
                        set2.style.display = "none";
                    }
                }
            }
            function dropbtn(){
                var a = document.getElementById("droptypecon");
                if(a.style.display === "block")
                    a.style.display = "none";
                else
                    a.style.display = "block";
            }
            function dropbtn2(){
                var a = document.getElementById("dropman");
                if(a.style.display === "block")
                    a.style.display = "none";
                else
                    a.style.display = "block";
            }
            var index;
            function drop2(manage){
                var name = document.getElementById(manage.id);
                var t = document.getElementById("chos");
                t.innerHTML = "เลือกจัดเอง";
                var texts = document.getElementById("texttt");
                var a = document.getElementById("dropman");
                a.style.display = "none";
                texts.innerHTML = name.id;
            }
            var autot = 1;
            var four = true;
            var twelve = true;
            var fifteen = true;
            var seventeen = true;
            var eighteen = true;
            var twenty2 = true;
            var twenty = true;
            var nineteen = true;
            function auto(manage){
                var name = document.getElementById(manage.id);
                var t = document.getElementById("chos");
                t.innerHTML = "จัดอัติโนมัติ";
                var texts = document.getElementById("texttt");
                var uu = document.getElementById("dropman");
                uu.style.display = "none";
                texts.innerHTML = name.id;
                if(styles === "สวนน้ำชา" ){
                    for(var s =0;s<=type4.length&&four;s++){
                        if(types4[s]){
                            if(planb[1]){
                                create("รูปภาพจริง_2D/04ปาร์ม/04 ปาร์มและปรง 2D/"+type4[s]+".png",50,130,450,7,"a"+autot,"plam1",0.5);
                                autot++;
                            }
                            if(planb[12]){
                                create("รูปภาพจริง_2D/04ปาร์ม/04 ปาร์มและปรง 2D/"+type4[s]+".png",50,130,860,7,"a"+autot,"plam1",0.5);
                                autot++;
                            }
                            if(planb[85]){
                                create("รูปภาพจริง_2D/04ปาร์ม/04 ปาร์มและปรง 2D/"+type4[s]+".png",50,400,450,7,"a"+autot,"plam1",0.5);
                                autot++;
                            }
                            if(planb[96]){
                                create("รูปภาพจริง_2D/04ปาร์ม/04 ปาร์มและปรง 2D/"+type4[s]+".png",50,400,860,7,"a"+autot,"plam1",0.5);
                                autot++;
                            }
                            four = false;
                        }
                    }
                    for(var s =0;s<=type12.length&&twelve;s++){
                        if(types12[s]){
                            if(planb[2]){
                                create("รูปภาพจริง_2D/12คล้า-สาคู/12 คล้า-สาคู 2D/"+type12[s]+".png",40,135,495,6,"a"+autot);
                                autot++;
                                create("รูปภาพจริง_2D/12คล้า-สาคู/12 คล้า-สาคู 2D/"+type12[s]+".png",40,155,495,6,"a"+autot);
                                autot++;
                            }
                            if(planb[3]){
                                create("รูปภาพจริง_2D/12คล้า-สาคู/12 คล้า-สาคู 2D/"+type12[s]+".png",40,135,532,6,"a"+autot);
                                autot++;
                                create("รูปภาพจริง_2D/12คล้า-สาคู/12 คล้า-สาคู 2D/"+type12[s]+".png",40,155,532,6,"a"+autot);
                                autot++;
                            }
                            if(planb[4]){
                                create("รูปภาพจริง_2D/12คล้า-สาคู/12 คล้า-สาคู 2D/"+type12[s]+".png",40,135,569,6,"a"+autot);
                                autot++;
                                create("รูปภาพจริง_2D/12คล้า-สาคู/12 คล้า-สาคู 2D/"+type12[s]+".png",40,155,569,6,"a"+autot);
                                autot++;
                            }
                            if(planb[5]){
                                create("รูปภาพจริง_2D/12คล้า-สาคู/12 คล้า-สาคู 2D/"+type12[s]+".png",40,135,606,6,"a"+autot);
                                autot++;
                                create("รูปภาพจริง_2D/12คล้า-สาคู/12 คล้า-สาคู 2D/"+type12[s]+".png",40,155,606,6,"a"+autot);
                                autot++;
                            }
                            if(planb[6]){
                                create("รูปภาพจริง_2D/12คล้า-สาคู/12 คล้า-สาคู 2D/"+type12[s]+".png",40,135,643,6,"a"+autot);
                                autot++;
                                create("รูปภาพจริง_2D/12คล้า-สาคู/12 คล้า-สาคู 2D/"+type12[s]+".png",40,155,643,6,"a"+autot);
                                autot++;
                            }
                            if(planb[7]){
                                create("รูปภาพจริง_2D/12คล้า-สาคู/12 คล้า-สาคู 2D/"+type12[s]+".png",40,135,680,6,"a"+autot);
                                autot++;
                                create("รูปภาพจริง_2D/12คล้า-สาคู/12 คล้า-สาคู 2D/"+type12[s]+".png",40,155,680,6,"a"+autot);
                                autot++;
                            }
                            if(planb[8]){
                                create("รูปภาพจริง_2D/12คล้า-สาคู/12 คล้า-สาคู 2D/"+type12[s]+".png",40,135,717,6,"a"+autot);
                                autot++;
                                create("รูปภาพจริง_2D/12คล้า-สาคู/12 คล้า-สาคู 2D/"+type12[s]+".png",40,155,717,6,"a"+autot);
                                autot++;
                            }
                            if(planb[9]){
                                create("รูปภาพจริง_2D/12คล้า-สาคู/12 คล้า-สาคู 2D/"+type12[s]+".png",40,135,754,6,"a"+autot);
                                autot++;
                                create("รูปภาพจริง_2D/12คล้า-สาคู/12 คล้า-สาคู 2D/"+type12[s]+".png",40,155,754,6,"a"+autot);
                                autot++;
                            }
                            if(planb[10]){
                                create("รูปภาพจริง_2D/12คล้า-สาคู/12 คล้า-สาคู 2D/"+type12[s]+".png",40,135,791,6,"a"+autot);
                                autot++;
                                create("รูปภาพจริง_2D/12คล้า-สาคู/12 คล้า-สาคู 2D/"+type12[s]+".png",40,155,791,6,"a"+autot);
                                autot++;
                            }
                            if(planb[11]){
                                create("รูปภาพจริง_2D/12คล้า-สาคู/12 คล้า-สาคู 2D/"+type12[s]+".png",40,135,828,6,"a"+autot);
                                autot++;
                                create("รูปภาพจริง_2D/12คล้า-สาคู/12 คล้า-สาคู 2D/"+type12[s]+".png",40,155,828,6,"a"+autot);
                                autot++;
                            }
                            twelve = false;
                        }
                    }
                    for(var s =0;s<=type15.length&&fifteen;s++){
                        if(types15[s]){
                            if(planb[86]){
                                create("รูปภาพจริง_2D/15พืชคลุมดิน/15 พืชคลุมดิน 2D/"+type15[s]+".png",40,410,495,6,"a"+autot,"kampu",20);
                                autot++;
                            }
                            if(planb[87]){
                                create("รูปภาพจริง_2D/15พืชคลุมดิน/15 พืชคลุมดิน 2D/"+type15[s]+".png",40,410,530,6,"a"+autot,"kampu",20);
                                autot++;
                            }
                            if(planb[88]){
                                create("รูปภาพจริง_2D/15พืชคลุมดิน/15 พืชคลุมดิน 2D/"+type15[s]+".png",40,410,565,6,"a"+autot,"kampu",20);
                                autot++;
                            }
                            if(planb[89]){
                                create("รูปภาพจริง_2D/15พืชคลุมดิน/15 พืชคลุมดิน 2D/"+type15[s]+".png",40,410,600,6,"a"+autot,"kampu",20);
                                autot++;
                            }
                            if(planb[92]){
                                create("รูปภาพจริง_2D/15พืชคลุมดิน/15 พืชคลุมดิน 2D/"+type15[s]+".png",40,410,720,6,"a"+autot,"kampu",20);
                                autot++;
                            }
                            if(planb[93]){
                                create("รูปภาพจริง_2D/15พืชคลุมดิน/15 พืชคลุมดิน 2D/"+type15[s]+".png",40,410,755,6,"a"+autot,"kampu",20);
                                autot++;
                            }
                            if(planb[94]){
                                create("รูปภาพจริง_2D/15พืชคลุมดิน/15 พืชคลุมดิน 2D/"+type15[s]+".png",40,410,790,6,"a"+autot,"kampu",20);
                                autot++;
                            }
                            if(planb[95]){
                                create("รูปภาพจริง_2D/15พืชคลุมดิน/15 พืชคลุมดิน 2D/"+type15[s]+".png",40,410,825,6,"a"+autot,"kampu",20);
                                autot++;
                            }
                            fifteen = false;
                        }
                    }
                    for(var s =0;s<=type17.length&&seventeen;s++){
                        if(types17[s]){
                            if(planb[13]){
                                create("รูปภาพจริง_2D/17ไผ่/"+type17[s]+".png",50,170,450,7,"a"+autot,"pai1",5);
                                autot++;
                            }                                                                                                                                                   
                            if(planb[24]){
                                create("รูปภาพจริง_2D/17ไผ่/"+type17[s]+".png",50,170,860,7,"a"+autot,"pai1",5);
                                autot++;
                            }
                            if(planb[25]){
                                create("รูปภาพจริง_2D/17ไผ่/"+type17[s]+".png",50,210,450,7,"a"+autot,"pai1",5);
                                autot++;
                            }
                            if(planb[36]){
                                create("รูปภาพจริง_2D/17ไผ่/"+type17[s]+".png",50,210,860,7,"a"+autot,"pai1",5);
                                autot++;
                            }
                            if(planb[37]){
                                create("รูปภาพจริง_2D/17ไผ่/"+type17[s]+".png",50,250,450,7,"a"+autot,"pai1",5);
                                autot++;
                            }
                            if(planb[48]){
                                create("รูปภาพจริง_2D/17ไผ่/"+type17[s]+".png",50,250,860,7,"a"+autot,"pai1",5);
                                autot++;
                            }
                            if(planb[49]){
                                create("รูปภาพจริง_2D/17ไผ่/"+type17[s]+".png",50,290,450,7,"a"+autot,"pai1",5);
                                autot++;
                            }
                            if(planb[60]){
                                create("รูปภาพจริง_2D/17ไผ่/"+type17[s]+".png",50,290,860,7,"a"+autot,"pai1",5);
                                autot++;
                            }
                            if(planb[61]){
                                create("รูปภาพจริง_2D/17ไผ่/"+type17[s]+".png",50,325,450,7,"a"+autot,"pai1",5);
                                autot++;
                            }
                            if(planb[72]){
                                create("รูปภาพจริง_2D/17ไผ่/"+type17[s]+".png",50,325,860,7,"a"+autot,"pai1",5);
                                autot++;
                            }
                            if(planb[73]){
                                create("รูปภาพจริง_2D/17ไผ่/"+type17[s]+".png",50,365,450,7,"a"+autot,"pai1",5);
                                autot++;
                            }
                            if(planb[84]){
                                create("รูปภาพจริง_2D/17ไผ่/"+type17[s]+".png",50,365,860,7,"a"+autot,"pai1",5);
                                autot++;
                            }
                            seventeen = false;
                        }
                    }
                    for(var s =0;s<=type18.length&&eighteen;s++){
                        if(types18[s]){
                            if(planb[75]){
                                create("รูปภาพจริง_2D/18ตะเกียง/18 ตะเกียง 2D/"+type18[s]+".png",40,380,520,6,"a"+autot,"takeang",10);
                                autot++;
                            }
                            if(planb[76]){
                                create("รูปภาพจริง_2D/18ตะเกียง/18 ตะเกียง 2D/"+type18[s]+".png",40,380,560,6,"a"+autot,"takeang",10);
                                autot++;
                            }
                            if(planb[81]){
                                create("รูปภาพจริง_2D/18ตะเกียง/18 ตะเกียง 2D/"+type18[s]+".png",40,380,760,6,"a"+autot,"takeang",10);
                                autot++;
                            }
                            if(planb[82]){
                                create("รูปภาพจริง_2D/18ตะเกียง/18 ตะเกียง 2D/"+type18[s]+".png",40,380,800,6,"a"+autot,"takeang",10);
                                autot++;
                            }
                            eighteen = false;
                        }
                    }
                    for(var s =0;s<=type22.length&&twenty2;s++){
                        if(types22[s]){
                            if(planb[14]&&planb[15]&&planb[16]&&planb[26]&&planb[27]&&planb[28]&&planb[38]&&planb[39]&&planb[40]){
                                create("รูปภาพจริง_2D/22ที่ดื่มชา/"+type22[s]+".png",110,190,495,6,"a"+autot,"gazebo",50);
                                autot++;
                            }
                            twenty2 = false;
                        }
                    }
                    for(var s =0;s<=type20.length&&twenty;s++){
                        if(types20[s]){
                            if(planb[22]&&planb[23]&&planb[34]&&planb[35]){
                                create("รูปภาพจริง_2D/20อ่างหิน/"+type20[s]+".png",60,200,800,6,"a"+autot,"pai",30);
                                autot++;
                            }
                            twenty = false;
                        }
                    }
                    for(var s =0;s<=type19.length&&nineteen;s++){
                        if(types19[s]){
                            if(planb[51]){
                                create("รูปภาพจริง_2D/19หิน/19 หิน 2D/"+type19[s]+".png",30,310,530,6,"a"+autot);
                                autot++;
                            }
                            if(planb[52]){
                                create("รูปภาพจริง_2D/19หิน/19 หิน 2D/"+type19[s]+".png",30,310,570,6,"a"+autot);
                                autot++;
                            }
                            nineteen = false;
                        }
                    }
                }
            }
            var startx1;
            var starty1;
            var objx1;
            var objy1;
            function movestart(ev,id){
                var obj = document.getElementById(id);
                startx1 = ev.clientX;
                starty1 = ev.clientY;
                objx1 = obj.offsetLeft;
                objy1 = obj.offsetTop;
            }
            function moveend(ev,id){
                var x = ev.clientX;
                var y = ev.clientY;
                var movex = x-startx1;
                var movey = y-starty1;
                var obj = document.getElementById(id);
                obj.style.top = (objy1+movey)+"px";
                obj.style.left = (objx1+movex)+"px";
            }
            function drop(type){
                var name = document.getElementById(type.id);
                var name2 = name.id;
                var texts = document.getElementById("textt");
                var a = document.getElementById("droptypecon");
                a.style.display = "none";
                texts.innerHTML = name.id;
                var table = document.getElementById("tabletoolsa");
                if(name2 === "ไม้ยืนต้น"){
                   for(var c = 0;c<index;c++){
                       table.deleteRow(0);
                   }
                   index = 0;
                   name = "type01";
                   table.style.display = "block";
                   for(var i =0 ;i<type1.length ; i++){
                       if(i%5===0){
                           var row = table.insertRow(-1);
                           index += 1;
                       }
                       var cell = row.insertCell(-1);
                       if(!types1[i]){
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/01ไม้ยืนต้น/วงกลม/"+type1[i]+".gif' \n\
                            width='120' onclick='clickpic1(this,"+i+");'><br><span>"+type1[i]+"</span>";
                       }
                       else{
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/01ไม้ยืนต้น/วงกลม/"+type1[i]+".gif' \n\
                            width='120' onclick='clickpic1(this,"+i+");' style='background-color: blue;'><br><span>"+type1[i]+"</span>";
                       }
                   }
                }
                else if(name2 ==="ไม้พุ่ม"){
                    for(var c = 0;c<index;c++){
                       table.deleteRow(0);
                    }
                   index = 0;
                   name = "type02";
                   table.style.display = "block";
                   for(var i =0 ;i<type2.length ; i++){
                       if(i%5===0){
                           var row = table.insertRow(-1);
                           index += 1;
                       }
                       var cell = row.insertCell(-1);
                       if(!types2[i]){
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/02ไม้พุ่ม/วงกลม/"+type2[i]+".gif' \n\
                            width='120' onclick='clickpic2(this,"+i+");'><br><span>"+type2[i]+"</span>";
                       }
                       else{
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/02ไม้พุ่ม/วงกลม/"+type2[i]+".gif' \n\
                            width='120' onclick='clickpic2(this,"+i+");' style='background-color: blue;'><br><span>"+type2[i]+"</span>";    
                       }
                   }
                }
                else if(name2 ==="ปาร์ม"){
                    for(var c = 0;c<index;c++){
                       table.deleteRow(0);
                    }
                   index = 0;
                    name = "type04";
                    table.style.display = "block";
                   for(var i =0 ;i<type4.length ; i++){
                       if(i%5===0){
                           var row = table.insertRow(-1);
                           index += 1;
                       }
                       var cell = row.insertCell(-1);
                       if(!types4[i]){
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/04ปาร์ม/วงกลม/"+type4[i]+".gif' \n\
                            width='120' onclick='clickpic4(this,"+i+");'><br><span>"+type4[i]+"</span>";
                       }
                       else{
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/04ปาร์ม/วงกลม/"+type4[i]+".gif' \n\
                            width='120' onclick='clickpic4(this,"+i+");' style='background-color: blue;'><br><span>"+type4[i]+"</span>";
                       }
                   }
                }  
                else if(name2 ==="สนประดับ"){
                    for(var c = 0;c<index;c++){
                       table.deleteRow(0);
                    }
                   index = 0;
                   name = "type05";
                   table.style.display = "block";
                   for(var i =0 ;i<type5.length ; i++){
                       if(i%5===0){
                           var row = table.insertRow(-1);
                           index += 1;
                       }
                       var cell = row.insertCell(-1);
                       if(!types5[i]){
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/05สนประดับ/วงกลม/"+type5[i]+".gif' \n\
                            width='120' onclick='clickpic5(this,"+i+");'><br><span>"+type5[i]+"</span>";
                       }
                       else{
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/05สนประดับ/วงกลม/"+type5[i]+".gif' \n\
                            width='120' onclick='clickpic5(this,"+i+");' style='background-color: blue;'><br><span>"+type5[i]+"</span>";
                       }
                   }
                }
                else if(name2 ==="ไม้อวบน้ำ"){
                    for(var c = 0;c<index;c++){
                       table.deleteRow(0);
                    }
                   index = 0;
                   name = "type07";
                   table.style.display = "block";
                   for(var i =0 ;i<type7.length ; i++){
                       if(i%5===0){
                           var row = table.insertRow(-1);
                           index += 1;
                       }
                       var cell = row.insertCell(-1);
                       if(!types7[i]){
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/07ไม้อวบน้ำ/วงกลม/"+type7[i]+".gif' \n\
                            width='120' onclick='clickpic7(this,"+i+");'><br><span>"+type7[i]+"</span>";
                       }
                       else{
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/07ไม้อวบน้ำ/วงกลม/"+type7[i]+".gif' \n\
                            width='120' onclick='clickpic7(this,"+i+");' style='background-color: blue;'><br><span>"+type7[i]+"</span>";
                       }
                   }
                }
                else if(name2 ==="ใบไม้สวยงาม"){
                    for(var c = 0;c<index;c++){
                       table.deleteRow(0);
                    }
                   index = 0;
                   name = "type08";
                   table.style.display = "block";
                   for(var i =0 ;i<type8.length ; i++){
                       if(i%5===0){
                           var row = table.insertRow(-1);
                           index += 1;
                       }
                       var cell = row.insertCell(-1);
                       if(!types8[i]){
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/08ใบไม้สวยงาม/วงกลม/"+type8[i]+".gif' \n\
                            width='120' onclick='clickpic8(this,"+i+");'><br><span>"+type8[i]+"</span>";
                       }
                       else{
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/08ใบไม้สวยงาม/วงกลม/"+type8[i]+".gif' \n\
                            width='120' onclick='clickpic8(this,"+i+");' style='background-color: blue;'><br><span>"+type8[i]+"</span>";
                       }
                   }
                }
                else if(name2 ==="หมากผู้หมากเมีย"){
                    for(var c = 0;c<index;c++){
                       table.deleteRow(0);
                    }
                   index = 0;
                   name = "type09";
                   table.style.display = "block";
                   for(var i =0 ;i<type9.length ; i++){
                       if(i%5===0){
                           var row = table.insertRow(-1);
                           index += 1;
                       }
                       var cell = row.insertCell(-1);
                       if(!types9[i]){
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/09หมากผู้หมากเมีย/วงกลม/"+type9[i]+".gif' \n\
                            width='120' onclick='clickpic9(this,"+i+");'><br><span>"+type9[i]+"</span>";
                       }
                       else{
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/09หมากผู้หมากเมีย/วงกลม/"+type9[i]+".gif' \n\
                            width='120' onclick='clickpic9(this,"+i+");' style='background-color: blue;'><br><span>"+type9[i]+"</span>";
                       }
                   }
                }
                else if(name2 ==="เขียวหมื่นปี"){
                    for(var c = 0;c<index;c++){
                       table.deleteRow(0);
                    }
                   index = 0;
                   name = "type10";
                   table.style.display = "block";
                   for(var i =0 ;i<type10.length ; i++){
                       if(i%5===0){
                           var row = table.insertRow(-1);
                           index += 1;
                       }
                       var cell = row.insertCell(-1);
                       if(!types10[i]){
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/10เขียวหมื่นปี/วงกลม/"+type10[i]+".gif' \n\
                            width='120' onclick='clickpic10(this,"+i+");'><br><span>"+type10[i]+"</span>";
                       }
                       else{
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/10เขียวหมื่นปี/วงกลม/"+type10[i]+".gif' \n\
                            width='120' onclick='clickpic10(this,"+i+");' style='background-color: blue;'><br><span>"+type10[i]+"</span>";
                       }
                   }
                }
                else if(name2 ==="สาวน้อยประแป้ง"){
                    for(var c = 0;c<index;c++){
                       table.deleteRow(0);
                    }
                   index = 0;
                   name = "type11";
                   table.style.display = "block";
                   for(var i =0 ;i<type11.length ; i++){
                       if(i%5===0){
                           var row = table.insertRow(-1);
                           index += 1;
                       }
                       var cell = row.insertCell(-1);
                       if(!types11[i]){
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/11สาวน้อยประแป้ง/วงกลม/"+type11[i]+".gif' \n\
                            width='120' onclick='clickpic11(this,"+i+");'><br><span>"+type11[i]+"</span>";
                       }
                       else{
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/11สาวน้อยประแป้ง/วงกลม/"+type11[i]+".gif' \n\
                            width='120' onclick='clickpic11(this,"+i+");' style='background-color: blue;'><br><span>"+type11[i]+"</span>";
                       }
                   }
                }
                else if(name2 ==="คล้า-สาคู"){
                    for(var c = 0;c<index;c++){
                       table.deleteRow(0);
                    }
                   index = 0;
                   name = "type12";
                   table.style.display = "block";
                   for(var i =0 ;i<type12.length ; i++){
                       if(i%5===0){
                           var row = table.insertRow(-1);
                           index += 1;
                       }
                       var cell = row.insertCell(-1);
                       if(!types12[i]){
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/12คล้า-สาคู/วงกลม/"+type12[i]+".gif' \n\
                            width='120' onclick='clickpic12(this,"+i+");'><br><span>"+type12[i]+"</span>";
                       }
                       else{
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/12คล้า-สาคู/วงกลม/"+type12[i]+".gif' \n\
                            width='120' onclick='clickpic12(this,"+i+");' style='background-color: blue;'><br><span>"+type12[i]+"</span>";
                       }
                   }
                }
                else if(name2 ==="กล้วย-กล้วยเทียม"){
                   for(var c = 0;c<index;c++){
                       table.deleteRow(0);
                    }
                   index = 0;
                   name = "type13";
                   table.style.display = "block";
                   for(var i =0 ;i<type13.length ; i++){
                       if(i%5===0){
                           var row = table.insertRow(-1);
                           index += 1;
                       }
                       var cell = row.insertCell(-1);
                       if(!types13[i]){
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/13กล้วย-กล้วยเทียม/วงกลม/"+type13[i]+".gif' \n\
                            width='120' onclick='clickpic13(this,"+i+");'><br><span>"+type13[i]+"</span>";
                       }
                       else{
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/13กล้วย-กล้วยเทียม/วงกลม/"+type13[i]+".gif' \n\
                            width='120' onclick='clickpic13(this,"+i+");' style='background-color: blue;'><br><span>"+type13[i]+"</span>";
                       }
                   }
                }
                else if(name2 ==="เฟริน"){
                   for(var c = 0;c<index;c++){
                       table.deleteRow(0);
                    }
                   index = 0;
                   name = "type14";
                   table.style.display = "block";
                   for(var i =0 ;i<type14.length ; i++){
                       if(i%5===0){
                           var row = table.insertRow(-1);
                           index += 1;
                       }
                       var cell = row.insertCell(-1);
                       if(!types14[i]){
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/14เฟริน/วงกลม/"+type14[i]+".gif' \n\
                            width='120' onclick='clickpic14(this,"+i+");'><br><span>"+type14[i]+"</span>";
                       }
                       else{
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/14เฟริน/วงกลม/"+type14[i]+".gif' \n\
                            width='120' onclick='clickpic14(this,"+i+");' style='background-color: blue;'><br><span>"+type14[i]+"</span>";
                       }
                   }
                }
                else if(name2 ==="พืชคลุมดิน"){
                   for(var c = 0;c<index;c++){
                       table.deleteRow(0);
                    }
                   index = 0;
                   name = "type15";
                   table.style.display = "block";
                   for(var i =0 ;i<type15.length ; i++){
                       if(i%5===0){
                           var row = table.insertRow(-1);
                           index += 1;
                       }
                       var cell = row.insertCell(-1);
                       if(!types15[i]){
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/15พืชคลุมดิน/วงกลม/"+type15[i]+".gif' \n\
                            width='120' onclick='clickpic15(this,"+i+");'><br><span>"+type15[i]+"</span>";
                       }
                       else{
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/15พืชคลุมดิน/วงกลม/"+type15[i]+".gif' \n\
                            width='120' onclick='clickpic15(this,"+i+");' style='background-color: blue;'><br><span>"+type15[i]+"</span>";
                       }
                   }
                }
                else if(name2 ==="ไม้ดอกล้มลุก"){
                   for(var c = 0;c<index;c++){
                       table.deleteRow(0);
                    }
                   index = 0;
                   name = "type16";
                   table.style.display = "block";
                   for(var i =0 ;i<type16.length ; i++){
                       if(i%5===0){
                           var row = table.insertRow(-1);
                           index += 1;
                       }
                       var cell = row.insertCell(-1);
                       if(!types16[i]){
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/16ไม้ดอกล้มลุก/วงกลม/"+type16[i]+".gif' \n\
                            width='120' onclick='clickpic16(this,"+i+");'><br><span>"+type16[i]+"</span>";
                       }
                       else{
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/16ไม้ดอกล้มลุก/วงกลม/"+type16[i]+".gif' \n\
                            width='120' onclick='clickpic16(this,"+i+");' style='background-color: blue;'><br><span>"+type16[i]+"</span>";
                       }
                   }
                }
                else if(name2 ==="ไผ่"){
                   for(var c = 0;c<index;c++){
                       table.deleteRow(0);
                    }
                   index = 0;
                   name = "type17";
                   table.style.display = "block";
                   for(var i =0 ;i<type17.length ; i++){
                       if(i%5===0){
                           var row = table.insertRow(-1);
                           index += 1;
                       }
                       var cell = row.insertCell(-1);
                       if(!types17[i]){
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/17ไผ่/วงกลม/"+type17[i]+".gif' \n\
                            width='120' onclick='clickpic17(this,"+i+");'><br><span>"+type17[i]+"</span>";
                       }
                       else{
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/17ไผ่/วงกลม/"+type17[i]+".gif' \n\
                            width='120' onclick='clickpic17(this,"+i+");' style='background-color: blue;'><br><span>"+type17[i]+"</span>";
                       }
                   }
                }
                else if(name2 ==="ตะเกียง"){
                   for(var c = 0;c<index;c++){
                       table.deleteRow(0);
                    }
                   index = 0;
                   name = "type18";
                   table.style.display = "block";
                   for(var i =0 ;i<type18.length ; i++){
                       if(i%5===0){
                           var row = table.insertRow(-1);
                           index += 1;
                       }
                       var cell = row.insertCell(-1);
                       if(!types18[i]){
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/18ตะเกียง/วงกลม/"+type18[i]+".gif' \n\
                            width='120' onclick='clickpic18(this,"+i+");'><br><span>"+type18[i]+"</span>";
                       }
                       else{
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/18ตะเกียง/วงกลม/"+type18[i]+".gif' \n\
                            width='120' onclick='clickpic18(this,"+i+");' style='background-color: blue;'><br><span>"+type18[i]+"</span>";
                       }
                   }
                }
                else if(name2 ==="หิน"){
                   for(var c = 0;c<index;c++){
                       table.deleteRow(0);
                    }
                   index = 0;
                   name = "type19";
                   table.style.display = "block";
                   for(var i =0 ;i<type19.length ; i++){
                       if(i%5===0){
                           var row = table.insertRow(-1);
                           index += 1;
                       }
                       var cell = row.insertCell(-1);
                       if(!types19[i]){
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/19หิน/วงกลม/"+type19[i]+".gif' \n\
                            width='120' onclick='clickpic19(this,"+i+");'><br><span>"+type19[i]+"</span>";
                       }   
                       else{
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/19หิน/วงกลม/"+type19[i]+".gif' \n\
                            width='120' onclick='clickpic19(this,"+i+");' style='background-color: blue;'><br><span>"+type19[i]+"</span>";
                       }
                   }
                }
                else if(name2 ==="อ่างหิน"){
                   for(var c = 0;c<index;c++){
                       table.deleteRow(0);
                    }
                   index = 0;
                   name = "type20";
                   table.style.display = "block";
                   for(var i =0 ;i<type20.length ; i++){
                       if(i%5===0){
                           var row = table.insertRow(-1);
                           index += 1;
                       }
                       var cell = row.insertCell(-1);
                       if(!types20[i]){
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/20อ่างหิน/วงกลม/"+type20[i]+".gif' \n\
                            width='120' onclick='clickpic20(this,"+i+");'><br><span>"+type20[i]+"</span>";
                       }
                       else{
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/20อ่างหิน/วงกลม/"+type20[i]+".gif' \n\
                            width='120' onclick='clickpic20(this,"+i+");' style='background-color: blue;'><br><span>"+type20[i]+"</span>";
                       }
                   }
                }
                else if(name2 ==="ที่ดื่มชา"){
                   for(var c = 0;c<index;c++){
                       table.deleteRow(0);
                    }
                   index = 0;
                   name = "type22";
                   table.style.display = "block";
                   for(var i =0 ;i<type22.length ; i++){
                       if(i%5===0){
                           var row = table.insertRow(-1);
                           index += 1;
                       }
                       var cell = row.insertCell(-1);
                       if(!types22[i]){
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/22ที่ดื่มชา/วงกลม/"+type22[i]+".gif' \n\
                            width='120' onclick='clickpic22(this,"+i+");'><br><span>"+type22[i]+"</span>";
                       }
                       else{
                            cell.innerHTML = "<img id='"+name+"_"+i+"' src='รูปภาพจริง_ตัด/22ที่ดื่มชา/วงกลม/"+type22[i]+".gif' \n\
                            width='120' onclick='clickpic22(this,"+i+");' style='background-color: blue;'><br><span>"+type22[i]+"</span>";
                       }
                   }
                }
            }
            function choosetools(){
                var ct = document.getElementById("choosetools");
                var cc = document.getElementById("toolsb");
                var cp = document.getElementById("planchoose");
                var cs = document.getElementById("listStyle");
                if(ct.style.display === "initial")
                    ct.style.display = "none";
                else{
                    ct.style.display = "initial";
                    cc.style.display = "none";
                    cp.style.display = "none";
                    cs.style.display = "none";
                }
            }
            function clickpic1(picture,pos){
                var pic = document.getElementById(picture.id);
                if(pic.style.backgroundColor==="blue"){
                    pic.style.backgroundColor = "transparent";
                    types1[pos]=false;
                }
                else{
                    pic.style.backgroundColor = "blue";
                    types1[pos]=true;
                }
            }
            function clickpic2(picture,pos){
                var pic = document.getElementById(picture.id);
                if(pic.style.backgroundColor==="blue"){
                    pic.style.backgroundColor = "transparent";
                    types2[pos]=false;
                }
                else{
                    pic.style.backgroundColor = "blue";
                    types2[pos]=true;
                }
            }
            function clickpic4(picture,pos){
                var pic = document.getElementById(picture.id);
                if(pic.style.backgroundColor==="blue"){
                    pic.style.backgroundColor = "transparent";
                    types4[pos]=false;
                }
                else{
                    pic.style.backgroundColor = "blue";
                    types4[pos]=true;
                }
            }
            function clickpic5(picture,pos){
                var pic = document.getElementById(picture.id);
                if(pic.style.backgroundColor==="blue"){
                    pic.style.backgroundColor = "transparent";
                    types5[pos]=false;
                }
                else{
                    pic.style.backgroundColor = "blue";
                    types5[pos]=true;
                }
            }
            function clickpic7(picture,pos){
                var pic = document.getElementById(picture.id);
                if(pic.style.backgroundColor==="blue"){
                    pic.style.backgroundColor = "transparent";
                    types7[pos]=false;
                }
                else{
                    pic.style.backgroundColor = "blue";
                    types7[pos]=true;
                }
            }
            function clickpic8(picture,pos){
                var pic = document.getElementById(picture.id);
                if(pic.style.backgroundColor==="blue"){
                    pic.style.backgroundColor = "transparent";
                    types8[pos]=false;
                }
                else{
                    pic.style.backgroundColor = "blue";
                    types8[pos]=true;
                }
            }
            function clickpic9(picture,pos){
                var pic = document.getElementById(picture.id);
                if(pic.style.backgroundColor==="blue"){
                    pic.style.backgroundColor = "transparent";
                    types9[pos]=false;
                }
                else{
                    pic.style.backgroundColor = "blue";
                    types9[pos]=true;
                }
            }
            function clickpic10(picture,pos){
                var pic = document.getElementById(picture.id);
                if(pic.style.backgroundColor==="blue"){
                    pic.style.backgroundColor = "transparent";
                    types10[pos]=false;
                }
                else{
                    pic.style.backgroundColor = "blue";
                    types10[pos]=true;
                }
            }
            function clickpic11(picture,pos){
                var pic = document.getElementById(picture.id);
                if(pic.style.backgroundColor==="blue"){
                    pic.style.backgroundColor = "transparent";
                    types11[pos]=false;
                }
                else{
                    pic.style.backgroundColor = "blue";
                    types11[pos]=true;
                }
            }
            function clickpic12(picture,pos){
                var pic = document.getElementById(picture.id);
                if(pic.style.backgroundColor==="blue"){
                    pic.style.backgroundColor = "transparent";
                    types12[pos]=false;
                }
                else{
                    pic.style.backgroundColor = "blue";
                    types12[pos]=true;
                }
            }
            function clickpic13(picture,pos){
                var pic = document.getElementById(picture.id);
                if(pic.style.backgroundColor==="blue"){
                    pic.style.backgroundColor = "transparent";
                    types13[pos]=false;
                }
                else{
                    pic.style.backgroundColor = "blue";
                    types13[pos]=true;
                }
            }
            function clickpic14(picture,pos){
                var pic = document.getElementById(picture.id);
                if(pic.style.backgroundColor==="blue"){
                    pic.style.backgroundColor = "transparent";
                    types14[pos]=false;
                }
                else{
                    pic.style.backgroundColor = "blue";
                    types14[pos]=true;
                }
            }
            function clickpic15(picture,pos){
                var pic = document.getElementById(picture.id);
                if(pic.style.backgroundColor==="blue"){
                    pic.style.backgroundColor = "transparent";
                    types15[pos]=false;
                }
                else{
                    pic.style.backgroundColor = "blue";
                    types15[pos]=true;
                }
            }
            function clickpic16(picture,pos){
                var pic = document.getElementById(picture.id);
                if(pic.style.backgroundColor==="blue"){
                    pic.style.backgroundColor = "transparent";
                    types16[pos]=false;
                }
                else{
                    pic.style.backgroundColor = "blue";
                    types16[pos]=true;
                }
            }
            function clickpic17(picture,pos){
                var pic = document.getElementById(picture.id);
                if(pic.style.backgroundColor==="blue"){
                    pic.style.backgroundColor = "transparent";
                    types17[pos]=false;
                }
                else{
                    pic.style.backgroundColor = "blue";
                    types17[pos]=true;
                }
            }
            function clickpic18(picture,pos){
                var pic = document.getElementById(picture.id);
                if(pic.style.backgroundColor==="blue"){
                    pic.style.backgroundColor = "transparent";
                    types18[pos]=false;
                }
                else{
                    pic.style.backgroundColor = "blue";
                    types18[pos]=true;
                }
            }
            function clickpic19(picture,pos){
                var pic = document.getElementById(picture.id);
                if(pic.style.backgroundColor==="blue"){
                    pic.style.backgroundColor = "transparent";
                    types19[pos]=false;
                }
                else{
                    pic.style.backgroundColor = "blue";
                    types19[pos]=true;
                }
            }
            function clickpic20(picture,pos){
                var pic = document.getElementById(picture.id);
                if(pic.style.backgroundColor==="blue"){
                    pic.style.backgroundColor = "transparent";
                    types20[pos]=false;
                }
                else{
                    pic.style.backgroundColor = "blue";
                    types20[pos]=true;
                }
            }
            function clickpic22(picture,pos){
                var pic = document.getElementById(picture.id);
                if(pic.style.backgroundColor==="blue"){
                    pic.style.backgroundColor = "transparent";
                    types22[pos]=false;
                }
                else{
                    pic.style.backgroundColor = "blue";
                    types22[pos]=true;
                }
            }
            function showtools(){
                var ct = document.getElementById("choosetools");
                var cc = document.getElementById("toolsb");
                var cp = document.getElementById("planchoose");
                var cs = document.getElementById("listStyle");
                var table = document.getElementById("tabletoolsb");
                if(cc.style.display === "initial"){
                    cc.style.display = "none";
                }
                else{
                    cc.style.display = "initial";
                    ct.style.display = "none";
                    cp.style.display = "none";
                    cs.style.display = "none";
                    var x = table.rows.length;
                    for(var i = 1;i<x;i++){
                        table.deleteRow(1);
                    }
                    var index2=1;
                    for(var i = 0;i<type1.length;i++){
                        if(types1[i]){
                            var row = table.insertRow(index2);
                            var cell = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell.innerHTML = type1[i];
                            cell2.innerHTML = "<img draggable='true' id='"+type1[i]+"' src='รูปภาพจริง_2D/01ไม้ยืนต้น/01 ไม้ยืนต้น 2D/"+type1[i]+".png' \n\
                            height='37px' ondragstart='starttype(event);' ondragend='endtype1(event,"+i+");'>";
                            index2++;
                        }
                    }
                    for(var i = 0;i<type2.length;i++){
                        if(types2[i]){
                            var row = table.insertRow(index2);
                            var cell = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell.innerHTML = type2[i];
                            cell2.innerHTML = "<img draggable='true' id='"+type2[i]+"' src='รูปภาพจริง_2D/02ไม้พุ่ม/02 ไม้พุ่ม 2D/"+type2[i]+".png'\n\
                            height='37px' ondragstart='starttype(event);' ondragend='endtype2(event,"+i+");'>";
                            index2++;
                        }
                    }
                    for(var i = 0;i<type4.length;i++){
                        if(types4[i]){
                            var row = table.insertRow(index2);
                            var cell = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell.innerHTML = type4[i];
                            cell2.innerHTML = "<img draggable='true' id='"+type4[i]+"' src='รูปภาพจริง_2D/04ปาร์ม/04 ปาร์มและปรง 2D/"+type4[i]+".png' \n\
                            height='37px' ondragstart='starttype(event);' ondragend='endtype4(event,"+i+");'>";
                            index2++;
                        }
                    }
                    for(var i = 0;i<type5.length;i++){
                        if(types5[i]){
                            var row = table.insertRow(index2);
                            var cell = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell.innerHTML = type5[i];
                            cell2.innerHTML = "<img draggable='true' id='"+type5[i]+"' src='รูปภาพจริง_2D/05สนประดับ/05 สนประดับ 2D/"+type5[i]+".png' \n\
                            height='37px' ondragstart='starttype(event);' ondragend='endtype5(event,"+i+");'>";
                            index2++;
                        }
                    }
                    for(var i = 0;i<type7.length;i++){
                        if(types7[i]){
                            var row = table.insertRow(index2);
                            var cell = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell.innerHTML = type7[i];
                            cell2.innerHTML = "<img draggable='true' id='"+type7[i]+"' src='รูปภาพจริง_2D/07ไม้อวบน้ำ/07 ไม้อวบน้ำ 2D/"+type7[i]+".png' \n\
                            height='37px' ondragstart='starttype(event);' ondragend='endtype7(event,"+i+");'>";
                            index2++;
                        }
                    }
                    for(var i = 0;i<type8.length;i++){
                        if(types8[i]){
                            var row = table.insertRow(index2);
                            var cell = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell.innerHTML = type8[i];
                            cell2.innerHTML = "<img draggable='true' id='"+type8[i]+"' src='รูปภาพจริง_2D/08ใบไม้สวยงาม/08 ใบไม้สวยงาม 2D/"+type8[i]+".png' \n\
                            height='37px' ondragstart='starttype(event);' ondragend='endtype8(event,"+i+");'>";
                            index2++;
                        }
                    }
                    for(var i = 0;i<type9.length;i++){
                        if(types9[i]){
                            var row = table.insertRow(index2);
                            var cell = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell.innerHTML = type9[i];
                            cell2.innerHTML = "<img draggable='true' id='"+type9[i]+"' src='รูปภาพจริง_2D/09หมากผู้หมากเมีย/09 หมากผู้หมากเมีย 2D/"+type9[i]+".png' \n\
                            height='37px' ondragstart='starttype(event);' ondragend='endtype9(event,"+i+");'>";
                            index2++;
                        }
                    }
                    for(var i = 0;i<type10.length;i++){
                        if(types10[i]){
                            var row = table.insertRow(index2);
                            var cell = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell.innerHTML = type10[i];
                            cell2.innerHTML = "<img draggable='true' id='"+type10[i]+"' src='รูปภาพจริง_2D/10เขียวหมื่นปี/10 เขียวหมื่นปี 2D/"+type10[i]+".png' \n\
                            height='37px' ondragstart='starttype(event);' ondragend='endtype10(event,"+i+");'>";
                            index2++;
                        }
                    }
                    for(var i = 0;i<type11.length;i++){
                        if(types11[i]){
                            var row = table.insertRow(index2);
                            var cell = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell.innerHTML = type11[i];
                            cell2.innerHTML = "<img draggable='true' id='"+type11[i]+"' src='รูปภาพจริง_2D/11สาวน้อยประแป้ง/11 สาวน้อยประแป้ง 2D/"+type11[i]+".png' \n\
                            height='37px' ondragstart='starttype(event);' ondragend='endtype11(event,"+i+");'>";
                            index2++;
                        }
                    }
                    for(var i = 0;i<type12.length;i++){
                        if(types12[i]){
                            var row = table.insertRow(index2);
                            var cell = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell.innerHTML = type12[i];
                            cell2.innerHTML = "<img draggable='true' id='"+type12[i]+"' src='รูปภาพจริง_2D/12คล้า-สาคู/12 คล้า-สาคู 2D/"+type12[i]+".png' \n\
                            height='37px' ondragstart='starttype(event);' ondragend='endtype12(event,"+i+");'>";
                            index2++;
                        }
                    }
                    for(var i = 0;i<type13.length;i++){
                        if(types13[i]){
                            var row = table.insertRow(index2);
                            var cell = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell.innerHTML = type13[i];
                            cell2.innerHTML = "<img draggable='true' id='"+type13[i]+"' src='รูปภาพจริง_2D/13กล้วย-กล้วยเทียม/"+type13[i]+".png' \n\
                            height='37px' ondragstart='starttype(event);' ondragend='endtype13(event,"+i+");'>";
                            index2++;
                        }
                    }
                    for(var i = 0;i<type14.length;i++){
                        if(types14[i]){
                            var row = table.insertRow(index2);
                            var cell = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell.innerHTML = type14[i];
                            cell2.innerHTML = "<img draggable='true' id='"+type14[i]+"' src='รูปภาพจริง_2D/14เฟริน/14 เฟริน 2D/"+type14[i]+".png' \n\
                            height='37px' ondragstart='starttype(event);' ondragend='endtype14(event,"+i+");'>";
                            index2++;
                        }
                    }
                    for(var i = 0;i<type15.length;i++){
                        if(types15[i]){
                            var row = table.insertRow(index2);
                            var cell = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell.innerHTML = type15[i];
                            cell2.innerHTML = "<img draggable='true' id='"+type15[i]+"' src='รูปภาพจริง_2D/15พืชคลุมดิน/15 พืชคลุมดิน 2D/"+type15[i]+".png' \n\
                            height='37px' ondragstart='starttype(event);' ondragend='endtype15(event,"+i+");'>";
                            index2++;
                        }
                    }
                    for(var i = 0;i<type16.length;i++){
                        if(types16[i]){
                            var row = table.insertRow(index2);
                            var cell = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell.innerHTML = type16[i];
                            cell2.innerHTML = "<img draggable='true' id='"+type16[i]+"' src='รูปภาพจริง_2D/16ไม้ดอกล้มลุก/16 ไม้ดอกล้มลุก 2D/"+type16[i]+".png' \n\
                            height='37px' ondragstart='starttype(event);' ondragend='endtype16(event,"+i+");'>";
                            index2++;
                        }
                    }
                    for(var i = 0;i<type17.length;i++){
                        if(types17[i]){
                            var row = table.insertRow(index2);
                            var cell = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell.innerHTML = type17[i];
                            cell2.innerHTML = "<img draggable='true' id='"+type17[i]+"' src='รูปภาพจริง_2D/17ไผ่/"+type17[i]+".png' \n\
                            height='37px' ondragstart='starttype(event);' ondragend='endtype17(event,"+i+");'>";
                            index2++;
                        }
                    }
                    for(var i = 0;i<type18.length;i++){
                        if(types18[i]){
                            var row = table.insertRow(index2);
                            var cell = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell.innerHTML = type18[i];
                            cell2.innerHTML = "<img draggable='true' id='"+type18[i]+"' src='รูปภาพจริง_2D/18ตะเกียง/18 ตะเกียง 2D/"+type18[i]+".png' \n\
                            height='37px' ondragstart='starttype(event);' ondragend='endtype18(event,"+i+");'>";
                            index2++;
                        }
                    }
                    for(var i = 0;i<type19.length;i++){
                        if(types19[i]){
                            var row = table.insertRow(index2);
                            var cell = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell.innerHTML = type19[i];
                            cell2.innerHTML = "<img draggable='true' id='"+type19[i]+"' src='รูปภาพจริง_2D/19หิน/19 หิน 2D/"+type19[i]+".png' \n\
                            height='37px' ondragstart='starttype(event);' ondragend='endtype19(event,"+i+");'>";
                            index2++;
                        }
                    }
                    for(var i = 0;i<type20.length;i++){
                        if(types20[i]){
                            var row = table.insertRow(index2);
                            var cell = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell.innerHTML = type20[i];
                            cell2.innerHTML = "<img draggable='true' id='"+type20[i]+"' src='รูปภาพจริง_2D/20อ่างหิน/"+type20[i]+".png' \n\
                            height='37px' ondragstart='starttype(event);' ondragend='endtype20(event,"+i+");'>";
                            index2++;
                        }
                    }
                    for(var i = 0;i<type22.length;i++){
                        if(types22[i]){
                            var row = table.insertRow(index2);
                            var cell = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell.innerHTML = type22[i];
                            cell2.innerHTML = "<img draggable='true' id='"+type22[i]+"' src='รูปภาพจริง_2D/22ที่ดื่มชา/"+type22[i]+".png' \n\
                            height='37px' ondragstart='starttype(event);' ondragend='endtype22(event,"+i+");'>";
                            index2++;
                        }
                    }
                }
            }
            var startxt;
            var startyt;
            function starttype(ev){
                startxt = ev.clientX;
                startyt = ev.clientY;
            }
            function endtype1(ev,ids){
                var x = ev.clientX;
                var y = ev.clientY;
                create("รูปภาพจริง_2D/01ไม้ยืนต้น/01 ไม้ยืนต้น 2D/"+type1[ids]+".png",50,y,x,7,"a"+autot);
                autot++;
            }
            function endtype2(ev,ids){
                var x = ev.clientX;
                var y = ev.clientY;
                create("รูปภาพจริง_2D/02ไม้พุ่ม/02 ไม้พุ่ม 2D/"+type2[ids]+".png",40,y,x,7,"a"+autot);
                autot++;
            }
            function endtype4(ev,ids){
                var x = ev.clientX;
                var y = ev.clientY;
                create("รูปภาพจริง_2D/04ปาร์ม/04 ปาร์มและปรง 2D/"+type4[ids]+".png",50,y,x,7,"a"+autot,"plam1",0.5);
                autot++;
            }
            function endtype5(ev,ids){
                var x = ev.clientX;
                var y = ev.clientY;
                create("รูปภาพจริง_2D/05สนประดับ/05 สนประดับ 2D/"+type5[ids]+".png",60,y,x,7,"a"+autot);
                autot++;
            }
            function endtype7(ev,ids){
                var x = ev.clientX;
                var y = ev.clientY;
                create("รูปภาพจริง_2D/07ไม้อวบน้ำ/07 ไม้อวบน้ำ 2D/"+type7[ids]+".png",40,y,x,7,"a"+autot);
                autot++;
            }
            function endtype8(ev,ids){
                var x = ev.clientX;
                var y = ev.clientY;
                create("รูปภาพจริง_2D/08ใบไม้สวยงาม/08 ใบไม้สวยงาม 2D/"+type8[ids]+".png",30,y,x,7,"a"+autot);
                autot++;
            }
            function endtype9(ev,ids){
                var x = ev.clientX;
                var y = ev.clientY;
                create("รูปภาพจริง_2D/09หมากผู้หมากเมีย/09 หมากผู้หมากเมีย 2D/"+type9[ids]+".png",50,y,x,7,"a"+autot);
                autot++;
            }
            function endtype10(ev,ids){
                var x = ev.clientX;
                var y = ev.clientY;
                create("รูปภาพจริง_2D/10เขียวหมื่นปี/10 เขียวหมื่นปี 2D/"+type10[ids]+".png",40,y,x,7,"a"+autot);
                autot++;
            }
            function endtype11(ev,ids){
                var x = ev.clientX;
                var y = ev.clientY;
                create("รูปภาพจริง_2D/11สาวน้อยประแป้ง/11 สาวน้อยประแป้ง 2D/"+type11[ids]+".png",50,y,x,7,"a"+autot);
                autot++;
            }
            function endtype12(ev,ids){
                var x = ev.clientX;
                var y = ev.clientY;
                create("รูปภาพจริง_2D/12คล้า-สาคู/12 คล้า-สาคู 2D/"+type12[ids]+".png",40,y,x,7,"a"+autot);
                autot++;
            }
            function endtype13(ev,ids){
                var x = ev.clientX;
                var y = ev.clientY;
                create("รูปภาพจริง_2D/13กล้วย-กล้วยเทียม/"+type13[ids]+".png",50,y,x,7,"a"+autot);
                autot++;
            }
            function endtype14(ev,ids){
                var x = ev.clientX;
                var y = ev.clientY;
                create("รูปภาพจริง_2D/14เฟริน/14 เฟริน 2D/"+type14[ids]+".png",40,y,x,7,"a"+autot);
                autot++;
            }
            function endtype15(ev,ids){
                var x = ev.clientX;
                var y = ev.clientY;
                create("รูปภาพจริง_2D/15พืชคลุมดิน/15 พืชคลุมดิน 2D/"+type15[ids]+".png",40,y,x,7,"a"+autot,"kampu",20);
                autot++;
            }
            function endtype16(ev,ids){
                var x = ev.clientX;
                var y = ev.clientY;
                create("รูปภาพจริง_2D/16ไม้ดอกล้มลุก/16 ไม้ดอกล้มลุก 2D/"+type16[ids]+".png",40,y,x,7,"a"+autot);
                autot++;
            }
            function endtype17(ev,ids){
                var x = ev.clientX;
                var y = ev.clientY;
                create("รูปภาพจริง_2D/17ไผ่/"+type17[ids]+".png",50,y,x,7,"a"+autot,"pai1",5);
                autot++;
            }
            function endtype18(ev,ids){
                var x = ev.clientX;
                var y = ev.clientY;
                create("รูปภาพจริง_2D/18ตะเกียง/18 ตะเกียง 2D/"+type18[ids]+".png",40,y,x,7,"a"+autot,"takeang",10);
                autot++;
            }
            function endtype19(ev,ids){
                var x = ev.clientX;
                var y = ev.clientY;
                create("รูปภาพจริง_2D/19หิน/19 หิน 2D/"+type19[ids]+".png",30,y,x,7,"a"+autot);
                autot++;
            }
            function endtype20(ev,ids){
                var x = ev.clientX;
                var y = ev.clientY;
                create("รูปภาพจริง_2D/20อ่างหิน/"+type20[ids]+".png",60,y,x,7,"a"+autot,"pai",30);
                autot++;
            }
            function endtype22(ev,ids){
                var x = ev.clientX;
                var y = ev.clientY;
                create("รูปภาพจริง_2D/22ที่ดื่มชา/"+type22[ids]+".png",110,y,x,7,"a"+autot,"gazebo",50);
                autot++;
            }
            var threename = [];
            var threeposx = [];
            var threeposz = [];
            var threescale = [];
            
            
            function create(src,size,top,left,z,ids,name,scale){
                var btn = document.createElement("img");
                    btn.src = src;
                    btn.id = ids;
                    btn.addEventListener("dragstart",function(){movestart(event,ids);});
                    btn.addEventListener("dragend",function(){moveend(event,ids);});
                    btn.addEventListener("mousedown",function(){rightclick(event,ids);});
                    btn.style.width = size+"px";
                    btn.style.position = "absolute";
                    btn.style.left = left+"px";
                    btn.style.top = top+"px";
                    btn.style.zIndex = z;
                    var setNum = parseInt(ids.substring(1));
                    threename[setNum] = name;
                    threeposx[setNum] = ((left-450)*2)-400;
                    threeposz[setNum] = ((top-130)*4)-600;
                    threescale[setNum] = scale;
                    document.body.appendChild(btn);
            }
            function rightclick(ev,id){
                if(ev.button === 2){
                    document.getElementById(id).style.display = "none";
                }
            }
            function resize(){
                var plan = document.getElementById("plan");
                plan.style.zIndex = "99";
                plan.style.border = "2px solid red";
                var over = document.getElementById("over");
                over.style.display = "initial";
            }
            function hideover(){
                var plan = document.getElementById("plan");
                plan.style.zIndex = "1";
                plan.style.border = "none";
                var over = document.getElementById("over");
                over.style.display = "none";
            }
            var startx;
            var starty;
            var objx;
            var objy;
            function start(ev){
                var obj = document.getElementById("toolsb");
                startx = ev.clientX;
                starty = ev.clientY;
                objx = obj.offsetLeft;
                objy = obj.offsetTop;
            }
            function drag(ev){
                var x = ev.clientX;
                var y = ev.clientY;
                var movex = x-startx;
                var movey = y-starty;
                var obj = document.getElementById("toolsb");
                obj.style.top = (objy+movey)+"px";
                obj.style.left = (objx+movex)+"px";
            }
            function end(ev){
                var x = ev.clientX;
                var y = ev.clientY;
                var movex = x-startx;
                var movey = y-starty;
                var obj = document.getElementById("toolsb");
                obj.style.top = (objy+movey)+"px";
                obj.style.left = (objx+movex)+"px";
            }
            var styles;
            function cstyle(style){
                styles = style.id;
                var tab = document.getElementById("listStyle");
                tab.style.display = "none";
            }
            function close3d(){
                var close = document.getElementById("show3d");
                close.style.display = "none";
            }
            
            
            function renderplan(){
                var show = document.getElementById("show3d");
                show.style.display = "block";
                var scene = new THREE.Scene();
                var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 1,5000);
                var renderer = new THREE.WebGLRenderer();
                var light,ambient;
                ambient = new THREE.AmbientLight(0x404040);
                scene.add( ambient );
                var Lx = 0,Ly = 0, Lz = 0;
                var Lcolor;
                function Light(Lx,Ly,Lz,Lcolor){
                    light = new THREE.DirectionalLight( Lcolor );
                    light.position.set( Lx, Ly, Lz);
                    scene.add( light );
                }

                renderer.setSize(window.innerWidth, window.innerHeight);
                show.appendChild(renderer.domElement);

                var LampX = 0;
                var LampZ = 0;
                function rockLamp(LampX){
                    var geometry = new THREE.BoxGeometry(80, 15, 80);
                    var material = new THREE.MeshLambertMaterial();
                    var cube = new THREE.Mesh(geometry, material);
                    cube.material.color.setHex( 0xaaaaaa );
                    cube.position.set(LampX,-200,LampZ);
                    scene.add(cube);

                    var geometry = new THREE.BoxGeometry(40, 130, 40);
                    var material = new THREE.MeshLambertMaterial();
                    var cube = new THREE.Mesh(geometry, material);
                    cube.material.color.setHex( 0x999999 );
                    cube.position.set(LampX,-150,LampZ);
                    scene.add(cube);

                    var geometry = new THREE.BoxGeometry(75, 6,75);
                    var material = new THREE.MeshLambertMaterial();
                    var cube = new THREE.Mesh(geometry, material);
                    cube.material.color.setHex( 0xaaaaaa );
                    cube.position.set(LampX,-80,LampZ);
                    scene.add(cube);

                    var geometry = new THREE.BoxGeometry(60, 40,60);
                    var material = new THREE.MeshLambertMaterial();
                    var cube = new THREE.Mesh(geometry, material);
                    cube.material.color.setHex( 0x999999 );
                    cube.position.set(LampX,-65,LampZ);
                    scene.add(cube);

                    var geometry = new THREE.CylinderGeometry(55, 55,5,8);
                    var material = new THREE.MeshLambertMaterial();
                    var cube = new THREE.Mesh(geometry, material);
                    cube.material.color.setHex( 0xaaaaaa );
                    cube.position.set(LampX,-45,LampZ);
                    scene.add(cube);

                    var geometry = new THREE.SphereBufferGeometry(20, 20,5);
                    var material = new THREE.MeshLambertMaterial();
                    var cube = new THREE.Mesh(geometry, material);
                    cube.material.color.setHex( 0xaaaaaa );
                    cube.position.set(LampX,-35,LampZ);
                    scene.add(cube);
                }

                Light(500,1000,0,0xffffff);
                Light(-500,1000,0,0xffffff);
                Light(0,500,1000,0x222222);

                var loader = new THREE.JSONLoader();
                
                loader.load( 'tools3D/'+threename[1]+'.js', function( geometry) {
                mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
                mesh.scale.set( threescale[1], threescale[1], threescale[1]);
                mesh.position.z = threeposz[1];
                mesh.position.y = 0;
                mesh.position.x = threeposx[1];
                scene.add( mesh );
                });
                
                loader.load( 'tools3D/'+threename[2]+'.js', function( geometry) {
                mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
                mesh.scale.set( threescale[2], threescale[2], threescale[2]);
                mesh.position.z = threeposz[2];
                mesh.position.y = 0;
                mesh.position.x = threeposx[2];
                scene.add( mesh );
                });
                
                loader.load( 'tools3D/'+threename[3]+'.js', function( geometry) {
                mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
                mesh.scale.set( threescale[3], threescale[3], threescale[3]);
                mesh.position.z = threeposz[3];
                mesh.position.y = 0;
                mesh.position.x = threeposx[3];
                scene.add( mesh );
                });
                
                loader.load( 'tools3D/'+threename[4]+'.js', function( geometry) {
                mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
                mesh.scale.set( threescale[4], threescale[4], threescale[4]);
                mesh.position.z = threeposz[4];
                mesh.position.y = 0;
                mesh.position.x = threeposx[4];
                scene.add( mesh );
                });
                
                loader.load( 'tools3D/'+threename[5]+'.js', function( geometry) {
                mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
                mesh.scale.set( threescale[5], threescale[5], threescale[5]);
                mesh.position.z = threeposz[5];
                mesh.position.y = 0;
                mesh.position.x = threeposx[5];
                scene.add( mesh );
                });
                
                loader.load( 'tools3D/'+threename[6]+'.js', function( geometry) {
                mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
                mesh.scale.set( threescale[6], threescale[6], threescale[6]);
                mesh.position.z = threeposz[6];
                mesh.position.y = 0;
                mesh.position.x = threeposx[6];
                scene.add( mesh );
                });
                
                loader.load( 'tools3D/'+threename[7]+'.js', function( geometry) {
                mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
                mesh.scale.set( threescale[7], threescale[7], threescale[7]);
                mesh.position.z = threeposz[7];
                mesh.position.y = 0;
                mesh.position.x = threeposx[7];
                scene.add( mesh );
                });
                
                loader.load( 'tools3D/'+threename[8]+'.js', function( geometry) {
                mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
                mesh.scale.set( threescale[8], threescale[8], threescale[8]);
                mesh.position.z = threeposz[8];
                mesh.position.y = 0;
                mesh.position.x = threeposx[8];
                scene.add( mesh );
                });
                
                loader.load( 'tools3D/'+threename[9]+'.js', function( geometry) {
                mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
                mesh.scale.set( threescale[9], threescale[9], threescale[9]);
                mesh.position.z = threeposz[9];
                mesh.position.y = 0;
                mesh.position.x = threeposx[9];
                scene.add( mesh );
                });
                
                loader.load( 'tools3D/'+threename[10]+'.js', function( geometry) {
                mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
                mesh.scale.set( threescale[10], threescale[10], threescale[10]);
                mesh.position.z = threeposz[10];
                mesh.position.y = 0;
                mesh.position.x = threeposx[10];
                scene.add( mesh );
                });
                
                loader.load( 'tools3D/'+threename[11]+'.js', function( geometry) {
                mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
                mesh.scale.set( threescale[11], threescale[11], threescale[11]);
                mesh.position.z = threeposz[11];
                mesh.position.y = 0;
                mesh.position.x = threeposx[11];
                scene.add( mesh );
                });
                
                loader.load( 'tools3D/'+threename[12]+'.js', function( geometry) {
                mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
                mesh.scale.set( threescale[12], threescale[12], threescale[12]);
                mesh.position.z = threeposz[12];
                mesh.position.y = 0;
                mesh.position.x = threeposx[12];
                scene.add( mesh );
                });
                
                loader.load( 'tools3D/'+threename[13]+'.js', function( geometry) {
                mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
                mesh.scale.set( threescale[13], threescale[13], threescale[13]);
                mesh.position.z = threeposz[13];
                mesh.position.y = 0;
                mesh.position.x = threeposx[13];
                scene.add( mesh );
                });
                
                loader.load( 'tools3D/'+threename[14]+'.js', function( geometry) {
                mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
                mesh.scale.set( threescale[14], threescale[14], threescale[14]);
                mesh.position.z = threeposz[14];
                mesh.position.y = 0;
                mesh.position.x = threeposx[14];
                scene.add( mesh );
                });
                
                loader.load( 'tools3D/'+threename[15]+'.js', function( geometry) {
                mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
                mesh.scale.set( threescale[15], threescale[15], threescale[15]);
                mesh.position.z = threeposz[15];
                mesh.position.y = 0;
                mesh.position.x = threeposx[15];
                scene.add( mesh );
                });
                
                loader.load( 'tools3D/'+threename[16]+'.js', function( geometry) {
                mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
                mesh.scale.set( threescale[16], threescale[16], threescale[16]);
                mesh.position.z = threeposz[16];
                mesh.position.y = 0;
                mesh.position.x = threeposx[16];
                scene.add( mesh );
                });
                
                loader.load( 'tools3D/'+threename[17]+'.js', function( geometry) {
                mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
                mesh.scale.set( threescale[17], threescale[17], threescale[17]);
                mesh.position.z = threeposz[17];
                mesh.position.y = 0;
                mesh.position.x = threeposx[17];
                scene.add( mesh );
                });
                
                loader.load( 'tools3D/'+threename[18]+'.js', function( geometry) {
                mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
                mesh.scale.set( threescale[18], threescale[18], threescale[18]);
                mesh.position.z = threeposz[18];
                mesh.position.y = 0;
                mesh.position.x = threeposx[18];
                scene.add( mesh );
                });
                
                loader.load( 'tools3D/'+threename[19]+'.js', function( geometry) {
                mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
                mesh.scale.set( threescale[19], threescale[19], threescale[19]);
                mesh.position.z = threeposz[19];
                mesh.position.y = 0;
                mesh.position.x = threeposx[19];
                scene.add( mesh );
                });
                
                loader.load( 'tools3D/'+threename[20]+'.js', function( geometry) {
                mesh = new THREE.Mesh( geometry,new THREE.MeshPhongMaterial);
                mesh.scale.set( threescale[20], threescale[20], threescale[20]);
                mesh.position.z = threeposz[20];
                mesh.position.y = 0;
                mesh.position.x = threeposx[20];
                scene.add( mesh );
                });

                var groundTexture = THREE.ImageUtils.loadTexture( "grasslight-big.jpg" );
                groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
                groundTexture.repeat.set( 10, 10 );
                groundTexture.anisotropy = 5;
                var groundMaterial = new THREE.MeshPhongMaterial( { map: groundTexture } );
                var mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 1200, 800 ), groundMaterial );
                mesh.position.y = 0;
                mesh.rotation.x = - Math.PI / 2;
                scene.add( mesh );
                camera.position.set(0,200,800);
                camera.up = new THREE.Vector3(0,0,0);
                camera.lookAt(new THREE.Vector3(0,0,0));
                function render() {
                   requestAnimationFrame(render);
                   renderer.render(scene, camera);
                }
                render();
            }