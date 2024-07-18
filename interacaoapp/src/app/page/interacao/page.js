let cont = 0;
export default function interacao() {
  return (
    <div>
      <Toolbar
        onPlayMovie={() => alert('Executando')}
        onUploadImage={() => alert('Enviando!')}
      />


    </div>
  );
}



function Toolbar({ onPlayMovie, onUploadImage, cont }) {
  cont +1;
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Enviar Imagem</Button>
    </div>
  );
}



function Button({ onClick, children, cont }) {
  if (cont <= 1) {
    return (
      <Button onClick={onClick}>{children}</Button>
    );
  }
}
