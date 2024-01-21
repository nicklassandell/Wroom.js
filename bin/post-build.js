import { resolve } from 'path'
import fs from 'fs';

makeBookmarkableFile();

// appends init script at the end of build
function makeBookmarkableFile() {
	const execPath = process.argv[1].replace(/(.*)\/.*/, '$1'); // this file's path, just remove the filename
	const sourcePath = resolve(execPath, '../dist/wroom.iife.js');
	const targetPath = resolve(execPath, '../dist/wroom-bookmark.iife.js');

	let content = fs.readFileSync(sourcePath, 'utf-8');
	content = content.trim() + 'window.WroomJS.init();';
	fs.writeFileSync(targetPath, content, 'utf-8');
}
