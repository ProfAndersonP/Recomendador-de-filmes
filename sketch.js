let ageInput;
let genreSelect;
let recommendButton;
let recommendationText;

function setup() {
  // Criar o canvas dentro do 'sketch-holder'
  let canvas = createCanvas(400, 0);
  canvas.parent('sketch-holder');
  noLoop();

  // Criar input para a idade
  ageInput = createInput('');
  ageInput.attribute('placeholder', 'Digite sua idade');
  ageInput.attribute('type', 'number');
  ageInput.parent('sketch-holder');

  // Criar seletor de gênero
  genreSelect = createSelect();
  genreSelect.option('Ação');
  genreSelect.option('Comédia');
  genreSelect.option('Drama');
  genreSelect.option('Fantasia');
  genreSelect.option('Terror');
  genreSelect.parent('sketch-holder');

  // Criar botão de recomendação
  recommendButton = createButton('Recomendar Filme');
  recommendButton.mousePressed(recommendMovie);
  recommendButton.parent('sketch-holder');

  // Texto para exibir a recomendação
  recommendationText = createDiv('');
  recommendationText.addClass('recommendation');
  recommendationText.parent('sketch-holder');
}

function recommendMovie() {
  let age = ageInput.value();
  let genre = genreSelect.value();
  let movie = getMovieRecommendation(age, genre);

  recommendationText.html(`Recomendação: ${movie}`);
}

function getMovieRecommendation(age, genre) {
  // Banco de dados simples de filmes
  let movies = {
    'Ação': [
      { title: 'Os Vingadores', minAge: 12 },
      { title: 'Missão Impossível', minAge: 14 },
      { title: 'Mad Max: Estrada da Fúria', minAge: 16 }
    ],
    'Comédia': [
      { title: 'Minha Mãe é uma Peça', minAge: 12 },
      { title: 'Se Beber, Não Case!', minAge: 16 },
      { title: 'Deadpool', minAge: 18 }
    ],
    'Drama': [
      { title: 'À Procura da Felicidade', minAge: 10 },
      { title: 'O Poderoso Chefão', minAge: 16 },
      { title: 'Clube da Luta', minAge: 18 }
    ],
    'Fantasia': [
      { title: 'Harry Potter', minAge: 10 },
      { title: 'O Senhor dos Anéis', minAge: 12 },
      { title: 'Labirinto do Fauno', minAge: 16 }
    ],
    'Terror': [
      { title: 'Invocação do Mal', minAge: 16 },
      { title: 'O Exorcista', minAge: 18 },
      { title: 'Corra!', minAge: 14 }
    ]
  };

  let suitableMovies = movies[genre].filter(movie => age >= movie.minAge);

  if (suitableMovies.length > 0) {
    let randomIndex = floor(random(suitableMovies.length));
    return suitableMovies[randomIndex].title;
  } else {
    return 'Nenhum filme adequado encontrado para sua idade e gênero selecionado.';
  }
}