function AccountContainer({ children, title }: any) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          width: "30%",
          height: "50%",
          borderRadius: "10px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <h1>{title}</h1>
        {children}
      </div>
    );
  }
  
  export default AccountContainer;
  