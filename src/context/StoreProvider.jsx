import ProjectStore from "./store"

const StoreProvider=({children})=>{
    return <ProjectStore.Provider value={"salom"}>
    {children}
    </ProjectStore.Provider>
}

export default StoreProvider