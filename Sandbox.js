// Programmer: Mr. Lange
// Team Member: 
// Bolt ID: 6B78
// Date: 4.16.2024
// Program: Hello World - Sandbox
// Program URL: https://edu.sphero.com/program/16700413/edit

/*
async function startProgram() {
	await speak("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(60);
	await delay (2);
	setSpeed(0);
}
*/
/*
async function startProgram() {

	setMainLed({ r: 45, g: 125, b: 175 });
	await speak("Hello Mr. Lange", true);
	await delay(1);
	for (var squareCount = 0; squareCount < 4; squareCount++) {
		setMainLed(getRandomColor());
		await Sound.ScienceFiction.Blaster.play(true);
		await roll((getHeading() + 90), 60, 1);
		await delay(1);
	}

}

*/

async function startProgram() {
	await roll((getHeading() + 0), 60, 2);
	await delay(1);
	await roll((getHeading() + 90), 60, 2);
	await delay(1);
	await roll((getHeading() - 180), 60, 2);
	
}