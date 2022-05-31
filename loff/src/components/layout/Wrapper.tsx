function Wrapper(props: any) {
  if (props.layout) {
    return <div className={`wrapper ${props.layout}`}>{props.children}</div>;
  } else {
    return <div className={`wrapper`}>{props.children}</div>;
  }
}

export default Wrapper;
