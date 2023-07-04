import Navbar from "./Navbar";

function StaticComponent({children}:any){
    return(
        <div>
            <Navbar/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh"
            }}>
                {children}
            </div>
        </div>
    )
}

export default StaticComponent;