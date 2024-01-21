# Deep Neural Network and Zero Knowledge Proofs

This notebook file contains the definition and training of the deep neural network used to perform prediction regarding the existence or absence of heart disease on the Cleveland dataset, which is based on the work of [Ayon et al.](https://www.researchgate.net/publication/338748285_Coronary_Artery_Heart_Disease_Prediction_A_Comparative_Study_of_Computational_Intelligence_Techniques). After model training it uses the [EZKL](https://github.com/zkonduit/ezkl) library to create proofs for the inference stage so that users can verify the correct execution of the claimed machine learning model on their data.