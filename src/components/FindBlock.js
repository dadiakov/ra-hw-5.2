import React from 'react';

//Возвращает компонеты тем для поиска, инпут самого поиска и возможные варианты для поиска
export default function FindBlock(props) {
    return (
      <React.Fragment>
        <FindThemes params={props.params} />
        <FindInput>
          <div>
            Найдется всё. Например, <FindExample data={props.example} />
          </div>
        </FindInput>
      </React.Fragment>
    );
}

//Возвращает список тем для поиска
function FindThemes({ params }) {
    return (
      <ul>
        {params.map((theme) => (
          <FindTheme key="" theme={theme} />
        ))}
      </ul>
    );
  }

//Возвращает item вариант поиска
function FindTheme({ theme }) {
    return (
      <li>
        <a href={theme.link}>{theme.title}</a>
      </li>
    );
}

//Возвращает пример какого-нибудь запроса
function FindExample({ data }) {
    return <a href={data.link.href}>{data.link.title}</a>;
}

//Возвращает сам поисковой инпут
function FindInput(props) {
    return (
      <React.Fragment>
        <form action="">
          <input />
          <button onClick={findFunk}>???</button>
        </form>
        {props.children}
      </React.Fragment>
    );
}