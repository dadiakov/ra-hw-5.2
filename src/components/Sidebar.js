//Возвращает прайвый sidebar с различной информацией на входе, с картинкой и без, с потомками и без

export default function SideBar({ img, link, title, ...props }) {
    return (
      <div className="sidebar-div">
        {img ? <img src={img} alt="" /> : null}
        <div>
          <a href={link.href}>{link.title}</a>
        </div>
        <div>{title}</div>
        {props.children}
      </div>
    );
}