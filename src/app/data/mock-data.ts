import { Tariff } from "../models/tariff.model";

export const MOCK_TARIFFS: Tariff[] = [
  {
    "id": 1,
    "name": 'Tariff Name A',
    "downloadSpeed": 12000000,
    "uploadSpeed": 6000000,
    "price": 123.45,
    "benefits": ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3']
  },
  {
    "id": 2,
    "name": "Tarif Name B",
    "downloadSpeed": 12000000,
    "uploadSpeed": 6000000,
    "benefits": [
        "Tarif benefit 1",
        "Tarif benefit 2",
        "Tarif benefit 3"
    ],
    "price": 123.45
},
{
    "id": 3,
    "name": "Tarif Name C",
    "downloadSpeed": 10000000,
    "uploadSpeed": 4000000,
    "benefits": [
        "Tarif benefit 1",
        "Tarif benefit 2",
        "Tarif benefit 3",
        "Tarif benefit 4"
    ],
    "price": 90.00
},
{
    "id": 4,
    "name": "Tarif Name D",
    "downloadSpeed": 8000000,
    "uploadSpeed": 2000000,
    "benefits": [
        "Tarif benefit 1",
        "Tarif benefit 2"
    ],
    "price": 70.00
},
{
    "id": 5,
    "name": "Tarif Name E",
    "downloadSpeed": 9000000,
    "uploadSpeed": 7000000,
    "benefits": [
        "Tarif benefit 1",
        "Tarif benefit 2",
        "Tarif benefit 3",
        "Tarif benefit 4"
    ],
    "price": 120.00
},
{
  "id": 6,
  "name": "Tarif Name F",
  "downloadSpeed": 14000000,
  "uploadSpeed": 9000000,
  "benefits": [
      "Tarif benefit 1",
      "Tarif benefit 2",
      "Tarif benefit 3",
      "Tarif benefit 4",
      "Tarif benefit 5"
  ],
  "price": 140.00
},
{
  "id": 7,
  "name": "Tarif Name G",
  "downloadSpeed": 11000000,
  "uploadSpeed": 5000000,
  "benefits": [
      "Tarif benefit 1",
      "Tarif benefit 2"
  ],
  "price": 110.00
},
];
