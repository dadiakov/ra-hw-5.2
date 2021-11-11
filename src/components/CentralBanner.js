//Возвращает центральный баннер, начинку кидаем в children

export default function CentralBanner({ data, ...props }) {
    return <div className={data.style}>{props.children}</div>;
}