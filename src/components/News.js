import React from 'react';

// Компонент News возвращает 3 компонента: Разделы новостей, новости, относящиеся к тегу, и курсы валют
export default function News({ data }) {
    return (
      <React.Fragment>
        <RenderNews data={data.filter(tags)} className="tags">
          {(items) => items.map((e) => <RenderTag>{e.tags}</RenderTag>)}
        </RenderNews>
  
        <RenderNews data={data.filter(currentState.tag)} className="titles">
          {(items) => items.map((e) => <RenderItem>{e.title}</RenderItem>)}
        </RenderNews>
  
        <Currency data={currencyData} className="currency" />
      </React.Fragment>
    );
}

//Получает массив данных, отфильтрованных по тегу и возвращает список, вызывая функцию, 
//переданную в тело между открывающим и закрывающим тегом
function RenderNews({ data, ...props }) {
    return <ul className={props.className}>{props.children(data)}</ul>;
}

//Возвращает элемент списка Тегов новостей
function RenderTag({ className, children }) {
    return (
      <li className={className} key="">
        <button onClick={changeStateFunk}>{children}</button>
      </li>
    );
}

//Возвращает элемент списка ссылок новостей
function RenderItem({ className, children, link }) {
    return (
      <li className={className} key="">
        <a href={link}>{children}</a>
      </li>
    );
}

//Возвращает список курсов валют
function Currency({ data }) {
    return (
      <ul>
        {data.map((e) => (
          <li className="someClass" key="">
            {data.currency}
          </li>
        ))}
      </ul>
    );
}