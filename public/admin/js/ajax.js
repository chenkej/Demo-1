var j=-1;
var temp_str;
function topp(obj,div_idd,wj_ljj){
text_idd=obj.name;
window.text_id=text_idd;/////////////////////////////���ı��� id(�ֲ�����) ����Ϊȫ�ֱ���
window.div_id=div_idd;//////////////////////////////////����ʾ�� div ��id ����Ϊȫ�ֱ���
window.wj_lj=wj_ljj;//////////////////////////////////����ʾ�� div ��id ����Ϊȫ�ֱ���
}
var $=function(node){return document.getElementById(node);}//����document.getElementById������ʹ�ã�������$����д�˺���
var $$=function(node){return document.getElementsByTagName(node);}//��document.getElementsByTagNameҲ����д

////��ʼ/////////////////////////////////// div ��ʾ��λ�����ȶ��壨������ı�����ͬ��Ҳ���Լ�������
function div_fun(){
function getOffset(obj){  
  var offsetleft = obj.offsetLeft;  
  var offsettop = obj.offsetTop;  
  while (obj.offsetParent != document.body)  
  {  
  obj = obj.offsetParent;  
  offsetleft += obj.offsetLeft;  
  offsettop += obj.offsetTop;  
  }  
  return {Left : offsetleft, Top : offsettop};  
}  
var o=$(text_id);
var b=$(div_id);
var l=getOffset(o).Left;
var t=getOffset(o).Top;
var w=o.offsetWidth;
var h=o.offsetHeight;
var i=t+h-1;
var l2=l+11;
//alert ("w="+w+"L="+l+"t="+t);
b.style.left=l2+"px";//��ʾ����������ı���
b.style.top=i+"px";////��ʾ�����ı����¿�Խ�
b.style.width=w+"px";
b.style.height=0+"px";
}
////����/////////////////////////////////// div ��ʾ��λ�����ȶ��壨������ı�����ͬ��Ҳ���Լ�������

//����������ʼ��������////////////////�첽��ȡ���ݿ����ݣ�
function ajax_keyword(){
if(document.getElementById(text_id).value!=''){
div_fun();
	var xmlhttp;
	try{
		xmlhttp=new XMLHttpRequest();
		}
	catch(e){
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	xmlhttp.onreadystatechange=function(){
	if (xmlhttp.readyState==4){
		if (xmlhttp.status==200){
			var data=xmlhttp.responseText;
			$(div_id).innerHTML=unescape(data);//�Խ������unescape�����Է�ֹ��������
			j=-1;
			}
		}
	}
xmlhttp.open("post", wj_lj+"?text_name="+escape(document.getElementById(text_id).value)+"&div_id="+div_id+"&QiTaBianLiang=��������",true);
	xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	xmlhttp.send("keyw222="+escape($(text_id).value));//��IE6�£����л�������/*		 xmlhttp.open("post","ajax_result.php?keyword="+escape(document.getElementById("text_id").value),true);*/
}
}
//��������������������////////////�첽��ȡ���ݿ����ݣ�
//������ʼ��������������̰�������
function keyupdeal(e){
	var keyc;
	if(window.event){
		keyc=e.keyCode;
	}
	else if(e.which){
		keyc=e.which;
	}
	if(keyc!=40 && keyc!=38){
		ajax_keyword();
		temp_str=$(text_id).value;
}}
//������������������̰�������
///��ʼ////////���� li ��ʽ��������ʾ
function set_style(num){
/* var li_value=$$("li")[j].childNodes[0].nodeValue;
 if(li_value=="���رա�")$(text_id).value='';else $(text_id).value=li_value;//������ʾ���ı�����*/
 for(var i=0;i<$$("li").length;i++){
		var li_node=$$("li")[i];
		li_node.className="";
	}
	if(j>=0 && j<$$("li").length){
		var i_node=$$("li")[j];
		$$("li")[j].className="select_li";
	}
}
///����////////���� li ��ʽ��������ʾ


//��ʼ���������������������������������ѯ���ݶ�Ӧ���������ݷ��غ���
function re_val_fun(hid_val){
var re_js_array=hid_val.split(",");//��Ӣ�Ķ��Ÿ�����ַ�����ɢ������
$("mc").value=re_js_array[0]?re_js_array[0]:'';////////////////���� �ı���
$("lx").value=re_js_array[1]?re_js_array[1]:'';////////////////���� �ı���
$("bs").value=re_js_array[2]?re_js_array[2]:'';///////////////��ע  �ı���
$("bz").value=re_js_array[3]?re_js_array[3]:'';//////////��ʶ   Lable��ǩ
$("time").innerText=re_js_array[4]?re_js_array[4]:'';//////////��ʶ   Lable��ǩ
$("id").innerText=re_js_array[5]?re_js_array[5]:'';//////////��ʶ   Lable��ǩ
//$("qt").innerText=re_js_array[6]?re_js_array[6]:'';/////////
}//$mc.",".$lx.",".$bs.",".$bz.",".$time."".$id;
//�������������������������������������ѯ���ݶ�Ӧ���������ݷ��غ���


//��ʼ//////////�������ѡ�� li ʱ��������ʾ��ǰ��
function mo(nodevalue,hid_val){
	j=nodevalue;
	set_style(j);///////////////////// li ��ʽ����
       var li_value=$$("li")[j].childNodes[0].nodeValue;
       if(li_value=="���رա�"){$(text_id).value='';}
	   re_val_fun(hid_val);
}
function li_fun(obj,hid_val){/////////////////////////////////////////////////////��������ݴ����ݽ���ʾ���ı����ﲢ�ر���ʾ�� 
       var li_value=$$("li")[j].childNodes[0].nodeValue;
       if(li_value=="���رա�"){$(text_id).value=''; }else{$(text_id).value=li_value; }
	   re_val_fun(hid_val);/////////������ʾ���ı�����
	   hide_suggest();/////////////////////////////////////////////////�ر���ʾ 
}
//����� li �������ʱ�ύ������
/*function form_submit(){
	if(j>=0 && j<$$("li").length){
		$$("input")[0].value=$$("li")[j].childNodes[0].nodeValue;
	}
	document.search.submit();
}*/
//����� li �������ʱ�ύ������

////////////////////////////////������ʾ��
function hide_suggest(){
	var nodes=document.body.childNodes
	for(var i=0;i<nodes.length;i++){
		if(nodes[i]!=$(text_id)){
			$(div_id).innerHTML="";
			}
		}
	}
////////////////////////////////������ʾ��

////��ʼ/////////////////////////���̷��������
function keydowndeal(e){
	var keyc;
	if(window.event)keyc=e.keyCode;
	else if(e.which)keyc=e.which;
if(keyc==40 || keyc==38){
	                       if(keyc==40){if(j<$$("li").length)j++;else j=-1;}////���̷��������
	                       if(keyc==38){if(j>=0)j--;else j=$$("li").length-1;}//���̷��������
                           set_style(j);
var li_value=$$("li")[j].childNodes[0].nodeValue;
if(li_value=="���رա�"){$(text_id).value=''; re_val_fun();}else{ $(text_id).value=li_value;re_val_fun($("hid_val"+j).value);}
          }
if(keyc==13){
	   hide_suggest();/////////////////////////////////////////////////�ر���ʾ 
       var li_value=$$("li")[j].childNodes[0].nodeValue;
       if(li_value=="���رա�"){$(text_id).value=''; re_val_fun();}else{ $(text_id).value=li_value;re_val_fun($("hid_val"+j).value);}
}}
////����///////////////////////���̷��������
function document.onclick() //������ʱ�رոÿؼ� //ie6�����������������л����㴦�����
{ 
 with(window.event)
 {
  hide_suggest();
 }
}