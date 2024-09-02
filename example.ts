enum Components{
    GPU,
    CPU,
}

enum GpuType {
    INTEGRATED,
    DEDICATED
}

enum CpuArchiteture {
    ARM,
    X86
}
type Gpu = {
    brand: string,
    model: string,
    vram: string,
    type: GpuType
}

type Cpu = {
    brand: string,
    model: string,
    architeture: CpuArchiteture
    gpuIntegrate: Gpu,
}

type SelectComponent<T extends Components> = T extends Components.CPU ? Cpu : Gpu;

function selectComponent<T extends Components>(component: SelectComponent<T>) {
    console.log("El componente es: ", component);
}

selectComponent<Components.GPU>({
    brand: "NVIDIA",
    model: "RTX4090",
    vram: "24GB",
    type: GpuType.DEDICATED
})

//Omit y PICK
type CpuBrandsOmit = Omit<Cpu, "model" | "architeture" | "gpuIntegrate"> 
type CpuBrandsPick = Pick<Cpu, "brand">


//HERENCIA DE INTERFACES

interface BasicCompoent {
    brand: string,
    model: string
}

interface IGpu extends BasicCompoent {
    vram: string,
    type: GpuType
}

interface ICpu extends BasicCompoent {
    architeture: CpuArchiteture
    gpuIntegrate: Gpu,
}