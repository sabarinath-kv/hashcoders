import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

interface CreateListingProps {
    style?: CSSProperties;
}
 
const CreateListing: FC<CreateListingProps> = ({style}) => {
  const { push } = useRouter();
  
    return (  <div style={{width: 465, height: 401, position: 'relative', ...style}}>
    <div style={{width: 465, height: 401, left: 0, top: 0, position: 'absolute'}}>
      <div style={{width: 465, height: 401, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 6}} />
      <div style={{left: 15, top: 25, position: 'absolute', color: '#32325D', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Create new listing</div>
    </div>
    <div style={{width: 150, height: 194, left: 45, top: 99, position: 'absolute'}}>
      <div style={{width: 150, height: 150, left: 0, top: 0, position: 'absolute', background: '#F5F5F5', borderRadius: 8}} />
      <div style={{width: 95, height: 95, left: 27, top: 27, position: 'absolute', background: '#D9D9D9', borderRadius: 8, border: '1px #A5A5A5 dotted'}} />
      <img style={{width: 65, height: 65, left: 42, top: 42, position: 'absolute'}} src="/icons/digital.png" />
      <div style={{left: 27, top: 175, position: 'absolute', color: '#525F7F', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Digital Listing</div>
    </div>
    <div style={{width: 150, height: 194, left: 270, top: 99, position: 'absolute'}}>
      <div style={{width: 150, height: 150, left: 0, top: 0, position: 'absolute', background: '#F5F5F5', borderRadius: 8}} />
      <div style={{width: 95, height: 95, left: 27, top: 27, position: 'absolute', background: '#D9D9D9', borderRadius: 8, border: '1px #A5A5A5 dotted'}} />
      <img style={{width: 65, height: 65, left: 42, top: 42, position: 'absolute'}} src="/icons/physical.png" />
      <div style={{left: 21, top: 175, position: 'absolute', color: '#525F7F', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Physical Listing</div>
    </div>
    <div onClick={() => push('/host/create-listing')} style={{width: 136.46, height: 30, left: 165, top: 336, position: 'absolute', cursor: 'pointer'}}>
      <div style={{width: 136.46, height: 30, left: 0, top: 0, position: 'absolute', background: '#5E72E4', boxShadow: '0px 4px 6px rgba(50, 50, 93, 0.10)', borderRadius: 6}} />
      <div style={{width: 123, left: 8, top: 4, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Go To Create Page</div>
    </div>
  </div> );
}
 
export default CreateListing;