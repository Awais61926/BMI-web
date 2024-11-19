function MyButton({title,onClick}) {
    return <button style={{ borderRadius:12,margin:5}} onClick={onClick}>{title}</button>;
  }
  export default MyButton;
  