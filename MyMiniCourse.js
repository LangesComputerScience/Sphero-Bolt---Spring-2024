// Programmer: Mr. Lange
// Team Member: 
// Bolt ID: 6B78
// Date: 4.23.2024
// Program: My Mini Course
// Program URL: https://edu.sphero.com/program/16743345/edit

async function startProgram() {
	// Mr. Lange
	await roll((getHeading() + 0), 60, 2);
	await delay(1);
	await roll((getHeading() + 90), 60, 2);
	await delay(1);
}
