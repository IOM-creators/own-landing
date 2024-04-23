import { componentMap } from "@/helpers/componentsMap";
import { useMemo } from "react";

const GqlComponent = (props:any) => {
  const { section, alterType } = props
  let ComponentGql = componentMap[section.__typename];
console.log(props.forceGql);


const shouldForceGql = useMemo(() => {
    if (props.forceGql === true) {
        return true
    }

    if (!ComponentGql) {
        return false
    }

    if (Object.keys(section).length > 3) {
        return false
    }

    if (section.__typename === undefined || section.sys === undefined) {
        return false
    }

    return true
}, [ComponentGql, props.forceGql])


  if(!ComponentGql){
    return <></>
  }

  
  
  return (
    <div>
       <ComponentGql/>
    </div>
  );
};

export default GqlComponent;
