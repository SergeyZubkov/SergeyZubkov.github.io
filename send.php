<?
if((isset($_POST['name'])&&$_POST['name']!="")&&
   (isset($_POST['email'])&&$_POST['email']!="")&&
   (isset($_POST['subject'])&&$_POST['subject']!="")&&
   (isset($_POST['text'])&&$_POST['text']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'SVZubkovRU@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $message = '
                <html>
                    <head>
                        <title>'.$_POST['subject'].'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Эл. почта: '.$_POST['email'].'</p>
                        <br>
                        <p>'.$_POST['text'].'</p>                         
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $_POST['subject'], $message, $headers); //Отправка письма с помощью функции mail
}
?>