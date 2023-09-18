import './App.css';
import video from './images/adobeStock_186501324.mov'

function App() {
  
  return (
    <div className="App">
      <video loop autoPlay muted>
          <source src={video} type="video/mp4"/>
        </video>
      <header>
        <div>
          <div class="header">

            <div class="nav">
              <nav>
                <a class="button_demo" href="index.html">Демо-доступ</a>
                  <a href="index.html">Меню 1</a>
                  <a href="index.html">Меню 2</a>
               </nav>
            </div>
            
              <div class="logo">
                <a href="index.html">Aspina</a>
              </div>
            
            <div class="nav">
              <nav>
                <a href="index.html" >Меню 3 </a>
                  <a href="index.html">Меню 4</a>
                  <a href="index.html">Меню 5</a>
              </nav>
            </div>

          </div>
        </div>
      </header>
      
      <div class="overlay">
        
        <div class="slogon">
          <h1><b style={{color:"rgb(42, 108, 221)"}}>Aspina PMS</b><br></br>Система для гостиничного бизнеса</h1>
          <p>Легкое управление объектами любого мосшатаба.
            <div class='all-list'>
            <ul class='list'>
              <li>Контроль и анализ работы;</li>
              <li>Увеличение продаж;</li>
            </ul>
            <ul class='list'>
              <li>Прямые бронирования;</li>
              <li>Почасовая сдача объектов в аренду;</li>
            </ul>
            </div>
            </p>
            <span class="end">Все возможно вместе с <b>Aspina</b>.</span>
            
        </div>
        <div class="button_demo" >
            <a href="index.html" >Попробовать сейчас!</a>
        </div>
      </div>
      <div class="discription">

      <p>Все инструменты для управления средствами размещения в одном месте:</p>
      
      <div class="disc-list">
        <div class="disc-list-p">
          <h3>Контроль и управление всеми бизнес-процессами</h3>
          <p>Система управления отелем наглядно продемонстрирует всё, что происходит в вашем средстве размещения, а гибкие настройки помогут адаптировать систему под каждого пользователя</p>
        </div>
        
        <div class="disc-list-p">
          <h3>Мгновенное управление доступностью</h3>
          <p>Реализована максимально удобная система управления доступностью "Шахматка". Данные о доступности средств размещения будут автоматически обновлятся во всех подключенных каналах продаж.</p>
        </div>
        
        <div class="disc-list-p">
          <h3>Прямые бронирования</h3>
          <p>Модуль онлайн бронирования помогает увеличить количество продаж. А приятный бонус - Вы платите 0% за бронирования с вашего сайта</p>
        </div>
        
        <div class="disc-list-p">
          <h3>Анализ цен конкурентов</h3>
          <p>Наша система вместо Вас проанализирует рынок конкурентов и покажит диапозон цен схожих объектов.</p>
        </div>
        
        <div class="disc-list-p">
          <h3>Контроль отзывов</h3>
          <p>Вы всегда вкрусе что про Вас говорят. Система соберет в одно место отзывы с подключенных каналов продаж.</p>
        </div>
        
        <div class="disc-list-p">
          <h3>Конструктор персонального сайта</h3>
          <p>Нет своего сайта? Мы поможем! Блягодоря быстрому и удобному конструктору сайта Вы сможете за несколько минут сделать себе сайт. Все описания и доступность будет идти с нашего сервиса. А приятный бонус бесплатный Модуль бронирования</p>
        </div>
      </div>

      

      </div>
      <div class="partner">
        <p>От мало до велико! - <small>Мы работаем со всеми типами объектов</small></p>
        

      </div>
    </div>
  );
}

export default App;
