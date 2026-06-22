# AS
Com base no que vimos em aula e a orientação do professor para começar o projeto, realizamos uma parte significativa do projeto, entao conseguimos realizar algumas partes dele. porem algumas coisas estavam dando problema, entao eu resolvi

Primeiro, resolvi o problema do botão Concluir, porque antes as informações ficavam todas juntas em um texto e eu não conseguia organizar direito os itens da lista.

Depois, comecei a criar cada parte da tarefa separadamente, como o texto, o botão Excluir e o botão Concluir, ficando mais fácil controlar onde cada coisa aparecia.

Também adicionei a função de excluir tarefas e coloquei cores diferentes para cada nível de prioridade.

e fiz com que, ao concluir uma tarefa, ela fosse para a lista de concluídas junto com a prioridade, a data e o horário em que foi concluída.

Logo depois ajeitei a descrição das prioridades colocando bolinhas das respectivas cores das prioridades (no html).

Depois voltei ao JS e acrescentei uma legenda caso alguem tentar colocar uma tarefa com a caixa em branco, já tinha o codigo para so nao funcionar para caso deixasse em branco, porem adicionei um alert.

Logo apos isso eu comecei a criar a responsividade para contabilizar quando tinha um documento pendente e quando tinha um concluido e tambem tinha que sumir caso eu apagasse, eu primeiro criei mais uma div abaixo de onde eu tinha feito as descriçoes do que cada cor significava, ai criei a div e criei dois p*2 e coloquei o nome de pendentes: e concluidas:, logo apos eu coloquei o span e um id para as determinadas opçoes e fiz com o 0 que esta entre os spans fosse as id, porque antes eu coloquei o id nos <p> e nao funcionou porque estava apagando tudo e colocando o valor das listas mas eu queria que continuasse aparecendo pendentes: e concluidas: com seus respectivos valores.

Depois disso eu fui criar uma const no JS para atribuir o valor a elas, como foi ensinado em aula "const pendentes = document.getElementById('pendentes')" o outro é a mesma coisa so que em vez de pendentes era concluidas.

Após isso eu desci todo o codigo e criei uma legenda para facilitar a minha localizaçao em cada area do codigo e criei a //contadores, onde la eu criei a funçao contadores() e atribui as seguintes coisas pendentes.textContent = lista.children.length.

Depois disso eu coloquei a função onde as coisas eram adicionadas como por exemplo  "  concluido.appendChild(li)  " ai logo a baixo eu colocava "  contadores()  " para chamar a funçao e isso eu fiz no botao de adicionar para contar como pendente e no botao de excluir para zerar o numero caso precisasse

Agora estou deixando o site um pouco mais bonito, adicionando cores e colocando as coisas para o meio da tela
fui no site google fonts para pegar fonts diferentes para o site e importer para o projeto, depois fui formatando e colocando divs para conseguir personalizar da maneira correta

pronto com tudo feito eu separei oq era cada coisa novamente para deixar mais visivel onde eu estava mexendo e coloquei responsividade



