type RequestProps ={
     status: 'loading' | 'succes' |'error'

}


export default function Request(props:RequestProps) {
    let message='';
    if(props.status==='loading'){
        message="Yükleniyor";
    }
    if(props.status==='succes'){
        message="Başarıı";
    }
    if(props.status==='error'){
        message="Hata";
    }
  return (
    <div>
       {message}
    </div>
  )
}
