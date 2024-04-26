// Programmer: Mr. Lange
// Team Member: 
// Bolt ID: 6B78
// Date: 4.23.2024
// Program: My Mini Course
// Program URL: https://edu.sphero.com/program/16743345/edit

async function startProgram() {
	// Mr. Lange - Checkpoint One - Blue
	setMainLed({ r: 0, g: 0, b: 255 });
	await roll((getHeading() + 0), 60, 2);
	await delay(2);
	await roll((getHeading() + 90), 60, 2);
	await delay(2);

	// Michael Jordan - Checkpoint Two + Audio
	await Sound.ScienceFiction.Blaster.play(true);
	await roll((getHeading() + 125), 60, 5);
	await delay(2);
	await roll((getHeading() + 320), 60, 2);
	await delay(2);

	// Mr. Lange - Checkpoint Three - Green
	setMainLed({ r: 255, g: 0, b: 0 });
	await roll((getHeading() + 0), 60, 2);
	await delay(2);
	await roll((getHeading() + 90), 60, 2);
	await delay(2);
}
