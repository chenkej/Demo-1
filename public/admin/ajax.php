<?
header("Content-type:text/html;charset=gb2312"); 
   $host="192.168.0.129";
   $mysql_username="root";
   $pwd="123";
   $database="wyoasystem";
    $con=mysql_connect($host,$mysql_username,$pwd)or dir("����������ʧ��!");
    mysql_select_db($database,$con)or dir('���ݿ�����ʧ��'); //ѡ�� ���ݿ�
    mysql_query("set names gb2312");
	
$text_name=trim(unescape($_GET["text_name"]));////////////////////////////��ȡ�ı���ֵ
?><?
$res=mysql_query("select *from supplier where c_pname like '%$text_name%' limit 0,10");//��������ѯ info ��
$row=mysql_fetch_array($res);
$num=mysql_num_rows($res);
if($num>0){//�жϿ�ʼ
?>
<ul>
<?
$xh=-1;
$dian="|*|";
do{//zdw  bzdj  lxid  bz  bs  useridt 
	$mc=unescape($row['c_pname']);
	$lx=unescape($row['lx']);
	$bs=unescape($row['bs']);
	$bz=unescape($row['bz']);
	$time=unescape($row['time']);
	$id=unescape($row['id']);
	$xh++;
$text_val=$mc.",".$lx.",".$bs.",".$bz.",".$time.",".$id;
?>
<li value="<?PHP echo $xh;?>" style="width:130px;" onclick="li_fun(this.value,'<?PHP echo $text_val;?>')" onmouseover="mo(this.value,'<?PHP echo $text_val;?>')"><?PHP echo $mc;?></li><input type="hidden" id="hid_val<?PHP echo $xh?>" name="hid_val" value="<?PHP echo $text_val;?>" />
<?PHP }while($row=mysql_fetch_array($res));?>

<li value="<?PHP echo $xh+1;?>" onclick="li_fun(this.value,'<?PHP echo $text_val22;?>')" onmouseover="mo(this.value,'<?PHP echo $text_val22;?>')">���رա�</li><input type="hidden" id="hid_val<?PHP echo $xh+1;?>" name="hid_val" value="<?PHP echo $text_val;?>" />
</ul>
<?PHP }//�жϽ���?>

<?PHP 
    function unescape($str) //�������ת���� GB2312 ģ��
	{
        $str = rawurldecode($str);
        preg_match_all("/%u.{4}|&#x.{4};|&#\d+;|&#\d+?|.+/U",$str,$r);
        $ar = $r[0];
        foreach($ar as $k=>$v) 
		{
            if(substr($v,0,2) == "%u")
                $ar[$k] = iconv("UCS-2","gb2312",pack("H4",substr($v,-4)));
            elseif(substr($v,0,3) == "&#x")
                $ar[$k] = iconv("UCS-2","gb2312",pack("H4",substr($v,3,-1)));
            elseif(substr($v,0,2) == "&#") {
                $ar[$k] = iconv("UCS-2","gb2312",pack("n",preg_replace("/[^\d]/","",$v)));
        }
    }
        return join("",$ar);
    }
?>