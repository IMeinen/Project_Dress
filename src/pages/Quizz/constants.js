import React from 'react';
import { ExampleIcon } from './styles';

export const OPTIONS = [
  {
    question: 'ONDE VAI SER O SEU CASAMENTO?',
    key: 'location',
    answers: [
      { icon: <ExampleIcon />, value: 'campo', description: 'Campo' },
      { icon: <ExampleIcon />, value: 'cidade', description: 'Cidade' },
      { icon: <ExampleIcon />, value: 'praia', description: 'Praia' },
      { icon: <ExampleIcon />, value: 'serra', description: 'Serra' },
    ],
  },
  {
    question: 'QUAL O HORÁRIO?',
    key: 'schedule',
    answers: [
      { icon: <ExampleIcon />, value: 'manhã', description: 'Manhã' },
      { icon: <ExampleIcon />, value: 'tarde', description: 'Tarde' },
      { icon: <ExampleIcon />, value: 'final da tarde', description: 'Fim da tarde' },
      { icon: <ExampleIcon />, value: 'noite', description: 'Noite' },
    ],
  },
  {
    question: 'SERÁ  EM QUAL ESTAÇÃO DO ANO?',
    key: 'season',
    answers: [
      { icon: <ExampleIcon />, value: 'primavera', description: 'Primavera' },
      { icon: <ExampleIcon />, value: 'verão', description: 'Verão' },
      { icon: <ExampleIcon />, value: 'outono', description: 'Outono' },
      { icon: <ExampleIcon />, value: 'inverno', description: 'Inverno' },
    ],
  },
  {
    question: 'QUAL COR VOCÊ PREFERE?',
    key: 'color',
    answers: [
      { icon: <ExampleIcon />, value: 'branco', description: 'Branco' },
      { icon: <ExampleIcon />, value: 'off', description: 'Off white' },
      { icon: <ExampleIcon />, value: 'branco,off', description: 'Tanto faz' },

    ],
  },
  {
    question: 'QUANDO VOCÊ PENSA NOS TECIDOS DO SEU VESTIDO, ELES SÃO:',
    key: 'structure',
    answers: [
      { icon: <ExampleIcon />, value: 'leve', description: 'Leves' },
      { icon: <ExampleIcon />, value: 'meio', description: 'Meio termo' },
      { icon: <ExampleIcon />, value: 'estruturado', description: 'Estruturados' },

    ],
  },
  {
    question: 'QUANTO AOS DETALHES QUE VOCÊ  IMAGINA:',
    key: 'toppings',
    answers: [
      { icon: <ExampleIcon />, value: 'limpo,liso', description: 'Limpo/liso' },
      { icon: <ExampleIcon />, value: 'renda', description: 'Todo em renda' },
      { icon: <ExampleIcon />, value: 'renda aplicada', description: 'Com renda aplicada' },
      { icon: <ExampleIcon />, value: 'bordado', description: 'Com bordados' },

    ],
  },
  {
    question: 'E POR ÚLTIMO, SEU CORPO É:',
    key: 'body',
    answers: [
      { icon: <ExampleIcon />, value: 'ampulheta', description: 'Ampulheta' },
      { icon: <ExampleIcon />, value: 'ovalar', description: 'Ovalar' },
      { icon: <ExampleIcon />, value: 'pera', description: 'Pera' },
      { icon: <ExampleIcon />, value: 'retangular', description: 'Retangular' },
      { icon: <ExampleIcon />, value: 'triângulo invertido', description: 'Triângulo invertido' },
    ],
  },
];
