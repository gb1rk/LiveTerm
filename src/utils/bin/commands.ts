// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(' ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ', ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};  

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 

Happy to see you wanna know more about me!

I'm 27 y/o with a burning passion for camping, fishing, hiking & everything nerdy.
That includes AI, Gaming, Dungeons & Dragons... and so much more, more than I have time for.

You can find my CV here:
'resume' - my latest resume, english version is coming.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};


// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford real directories.
if you want to help, you can always employ me :)`;
};

export const systemctl = async (args: string[]): Promise<string> => {
  return `bash: Permission denied`;
};

export const ping = async (args: string[]): Promise<string> => {
  return `pong!`;
};

export const hello = async (args: string[]): Promise<string> => {
  return `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⣔⢾⡿⠿⠟⠭⠓⣀⢌⣤⣰⠀⡀⠤⡈⠻⢿⣿⣿⡿⢂⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠄⠂⠀⠁⢀⠂⠁⠀⠂⠀⣠⠚⡡⢖⠋⢀⡨⠔⠒⠋⠈⠀⠉⠀⠀⠀⠀⠀⠰⣃⡹⠿⡙⠢⢀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⠈⠀⠀⠐⠀⠀⣴⠗⢋⠔⠁⠀⠀⡀⠔⠈⠀⠀⠀⠀⠀⢀⢀⡠⢠⠄⠉⠁⠁⠬⠁⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠗⡴⠁⠀⢈⠄⠊⠀⠀⠀⠀⠀⠀⠀⠐⡈⠄⡐⠣⣙⣆⠀⠀⠀⢣⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡜⠀⢠⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⡄⠐⠐⢣⣿⣾⣧⠀⠀⠐⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠏⢃⡔⠁⠀⢠⠂⠀⠀⠀⠀⠀⠀⠂⠡⠀⠄⠁⠎⡽⣿⣿⣿⡀⠀⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡿⢴⣏⠎⠀⡰⠁⠀⠀⠀⠀⠀⠐⠀⡀⢁⠀⠊⡐⢨⣽⣿⣿⣿⣇⡀⠀⠁⠀⠀⠀⠀⢸⣿⣧⣿⣿⢰⣶⠶⠆⣶⡆⠀⣶⡆⠀⣴⡖⣶⡄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⣸⢎⠀⣰⠁⢀⡄⠀⠀⠀⠀⠀⠁⡔⡢⢅⢢⠅⡃⠈⠉⣡⠹⣟⠤⠀⠀⠀⠀⠀⠀⠸⠿⠏⠿⠟⠸⠿⠭⠀⠿⠷⠆⠿⠷⠆⠿⢇⠿⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠷⠈⢟⡆⠉⣬⡿⠃⠄⠀⠁⠀⠐⠠⠐⠉⠈⣷⠋⠐⡀⠉⡘⢻⣿⢤⢠⣾⣷⣯⣶⢦⡐⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠒⠈⣿⠳⢠⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣄⠀⠁⣠⣴⣾⣿⣢⢻⣿⣿⣿⢿⠟⣭⣤⣬⡤⣤⣤⢤⣤⢠⣤⠤⠄⣤⡤⣤⠀⣤⡤⠤⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢱⠡⠘⣗⣿⣿⡦⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⢸⢿⣷⠐⡜⢏⣿⣿⡇⠀⠀⠀⠀⠈⠀⠀⣿⡇⠀⣿⣟⢻⣿⢸⣿⣒⠀⣿⡗⣿⠄⣿⣗⡂⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠢⠀⠢⣗⣿⣏⠄⠀⠄⠀⡀⠀⠀⠀⠀⢀⣸⣾⡟⢤⣹⣾⣿⣿⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢤⢠⡀⣀⠀⠀⠀⠀⢓⠁⠨⢿⣿⡎⠀⠌⠐⠠⠐⡈⠀⠀⠀⠐⠊⠀⢽⡠⢿⣿⣿⣿⡇⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀
⠀⠀⠈⠀⠳⠘⡴⢣⣆⡀⠀⠘⢳⡆⢷⣿⣿⠀⠠⢁⠂⠁⠀⠀⠀⠀⠀⠀⠠⡔⣩⢽⣿⣿⡏⠀⠐⠄⠂⠠⢑⡌⣆⠡⢈⠐⡈⢄⠁⢂⠡⢈⠐⠠⠡⠌⡄⠣⢌⠢⢍⠢⡑⢌⠤
⠀⠀⠀⠀⠀⠀⠸⢻⣼⣻⣤⡀⠘⣇⢸⣿⡛⡄⠀⠀⡀⢀⠀⠄⠀⠀⠀⠀⠀⠀⢿⢟⡧⣘⠃⠀⠀⠀⠀⠠⢟⣼⣛⡧⡄⠠⢀⠘⠠⢀⠠⠀⡘⠃⠃⢇⣀⢃⡘⢄⠀⠄⠘⠀⠜
⠀⠀⠀⠀⠀⠀⠀⠁⢚⣿⣿⣿⣦⣻⢸⡿⣿⡆⡅⣬⠣⠀⠀⠀⠀⠀⠀⣀⣤⡔⠂⢾⣾⠁⣠⢠⣀⠀⠀⠀⠈⠘⣿⣿⣯⢧⡄⣌⠠⠀⢄⣰⣤⣎⣵⣎⣾⣽⣿⣞⢦⣀⠂⠈⢄
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣳⣿⠄⡿⣸⠍⠀⠀⠀⠈⠀⡁⠂⠉⣺⣃⠀⠢⡟⢸⣔⣿⣾⣿⣦⡀⠀⠀⢿⡿⣏⠷⣻⣮⡳⣌⢢⣿⣿⣿⣿⣿⡼⣿⣿⡝⢎⡖⣁⠢⣜
⠀⠀⠀⠀⠀⠀⠀⢀⣤⣢⣤⣷⣷⢙⡇⠻⣥⠘⣾⣄⢀⠀⠀⠀⠀⢀⠐⡠⠱⠄⢀⠸⡉⢘⣿⣞⣿⢿⣿⣟⣦⣝⣦⢻⡄⠣⠑⡛⠿⣔⣿⣿⣿⣿⣿⣿⣿⣿⠷⣌⣳⣞⣥⠲⣽
⢀⣀⣤⣴⣶⣶⣿⣿⢿⠿⡿⡝⠃⢿⡇⠐⠀⠀⠙⣟⣪⡀⠀⠀⠀⠀⠂⢀⠡⡸⢀⠜⠀⣼⣿⣿⣿⡿⢾⣭⣿⣿⣧⢇⡈⠁⠀⠈⠑⠸⡘⠱⢚⣿⣿⠯⡝⠻⡟⢮⠳⢍⢢⣻⣿`;
};

export const curl = async (args: string[]): Promise<string> => {
  return `<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>301 Moved</TITLE></HEAD><BODY>
<H1>301 Moved</H1>
The document has moved
<A HREF="http://www.timnume.dev/">here: https://www.tinum.dev/looking-for-work</A>.
</BODY></HTML>.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const nano = async (args?: string[]): Promise<string> => {
  return `Stop it. Get some help.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⣘⣩⣅⣤⣤⣄⣠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⢈⣻⣿⣿⢷⣾⣭⣯⣯⡳⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣧⠻⠿⡻⢿⠿⡾⣽⣿⣳⣧⡷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢰⡶⢈⠐⡀⠀⠀⠁⠀⠀⠀⠈⢿⡽⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢫⢅⢠⣥⣐⡀⠀⠀⠀⠀⠀⠀⢸⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠆⠡⠱⠒⠖⣙⠂⠈⠵⣖⡂⠄⢸⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⠆⠀⠰⡈⢆⣑⠂⠀⠀⠀⠀⠀⠏⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢗⠀⠱⡈⢆⠙⠉⠃⠀⠀⠀⠀⠃⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠦⡡⢘⠩⠯⠒⠀⠀⠀⢀⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡄⢔⡢⢡⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⢆⠸⡁⠋⠃⠁⠀⢀⢠⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡰⠌⣒⠡⠄⠀⢀⠔⠁⣸⣿⣷⣤⣀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣐⣤⡄⠀⠀⠘⢚⣒⢂⠇⣜⠒⠉⠀⢀⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣦⣔⣀⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⡀⢀⢠⣤⣶⣿⣿⣿⡆⠀⠀⠐⡂⠌⠐⠝⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢨⣶⣿⣿⣿⣿⣿⣿⣿⣿⣤⡶⢐⡑⣊⠀⡴⢤⣀⣀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠷⡈⠀⠶⢶⣰⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣉⠑⠚⣙⡒⠒⠲⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡁⠀⠀⠀⠀⠀⠀⠀⠀
⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⠶⠀⠀⠤⣬⣍⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀
⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣛⣙⠀⢠⠲⠖⠶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣭⣰⢘⣙⣛⣲⣿⣿⣿⣿⡿⡻⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀
⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠶⢾⡠⢤⣭⣽⣿⣿⣿⣿⡟⣱⠦⠄⠤⠐⡄⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⡀⠀
⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡛⣻⡕⠶⠶⣿⣿⣿⣿⣿⣿⣗⣎⠒⣀⠃⡐⢀⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀
⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣭⣹⣏⣛⣛⣿⣿⣿⣿⣿⣿⣿⣞⣍⣉⢉⠰⠀⠠⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠅
⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠶⢼⡧⢤⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣣⣡⣛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣅
⡿⣷⣽⡿⠛⠋⠉⣉⡐⠶⣾⣾⣟⣻⡕⠶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣹⣫⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠗
⢸⣿⣟⣥⡶⢘⡻⢶⡹⣛⣼⣿⣯⣽⢯⣙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⡿⠿⠟⠁⠀
⠘⢟⣾⣿⣿⣚⠷⣳⢳⣫⣽⣿⣛⣾⡷⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠁⠀⠈⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠙⢋⣿⣿⣯⣙⣯⣵⣿⣿⣯⣽⣟⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡯⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠉⠛⢻⠟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣟⡟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣡⣿⣿⣿⣿⡗⣮⢻⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ `;
};

export const vscode = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=iwGFalTRHDA&ab_channel=KamoKatt', '_blank'); // ...I'm sorry
  return `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⠶⠶⠶⠶⠶⠶⠶⠶⣶⣶⣶⣶⣶⠶⠶⠶⠶⠶⠶⠶⢶⣤⣤⣤⣄⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣠⡿⠋⠀⠀⠀⠀⢀⡠⠔⠒⢉⣉⣀⣠⠠⢄⣠⣀⣀⡀⠀⠀⠀⠀⠀⠀⠉⣉⣛⣛⡛⠷⣦⣄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣼⠏⠀⠀⠀⢀⠴⠊⣡⠔⣚⡩⠥⠤⠤⠔⠦⢤⠄⠀⠀⠈⠉⠉⠉⠉⣉⣉⣉⣀⣀⠀⠉⠀⠈⠙⠻⣦⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣾⠏⠀⠀⠀⠊⢁⡴⢋⠴⠊⠁⠀⠀⠀⠀⠀⠀⠀⢣⠀⠀⠀⠀⠀⠈⢹⠃⠀⠀⠀⠀⠉⠢⡀⠀⠀⠀⠸⣷⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣾⠏⠀⠀⠀⠀⠀⠉⠐⠁⣀⣤⣴⣶⣶⣶⡶⣶⣤⣀⠈⠀⠀⠀⠀⠀⠀⡎⠀⠀⢀⣀⣀⠀⠀⠑⠀⠀⠀⠀⢿⡄⠀⠀⠀
⠀⠀⢀⣴⣿⣷⡤⠄⠀⠀⠀⣤⡔⠀⣾⣿⣽⣿⣿⣿⣿⣤⣄⡉⠻⣷⡆⠀⠀⠀⣀⣀⣤⣶⣿⣿⣿⣿⣿⣷⠄⠤⠤⠤⢤⣈⠻⣶⡀⠀
⠀⣴⢟⡟⠁⢀⣴⡶⠾⠶⣶⣤⣈⡁⠈⠉⠀⣀⣴⡗⠀⠉⠙⠻⢿⠟⠁⠀⠀⠀⠙⢻⣿⠛⠋⠉⠉⠀⠀⠀⠀⢀⣀⣀⠰⢌⠓⢌⢿⡄
⣸⡏⢸⠀⣰⡿⠁⠀⢠⣷⡀⠉⠙⠛⠻⠿⠟⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⡀⠀⠀⠀⢶⣤⣤⣾⠟⠛⠛⠿⠆⡇⢘⣾⡇
⣿⡄⢸⠀⣿⡇⣠⣴⣿⡟⠻⢷⣦⣄⡀⠀⠀⠀⣀⣀⣀⡤⢦⣴⡶⠶⠀⠀⠀⠀⠀⠀⠉⠻⣷⣄⠀⠀⠉⠉⠁⢠⣿⡀⠀⢀⠇⢸⣻⡇
⢹⣧⠘⡆⠸⣧⠀⠀⢹⣷⣄⠀⠈⠙⣿⡷⣶⣤⣄⣀⠀⠀⠘⣷⡄⢶⠷⠶⠦⠀⠀⠀⢀⣴⡿⠿⠛⠢⢄⠀⢀⣼⣿⣧⢀⡡⠔⣻⡟⠀
⠀⠹⣷⣌⠓⠬⠀⠀⠈⠻⣿⣷⣦⣄⣿⣧⠀⠈⠉⠛⠻⢷⣶⣮⣥⣄⣀⡀⠀⠀⠹⠷⠟⠋⠀⠀⢀⣀⣤⣷⣿⠿⣿⣿⠀⠀⢰⡿⠁⠀
⠀⠀⠈⠻⣯⡀⠀⠀⠀⠀⠙⣷⡌⠙⣿⣿⣿⣶⣤⣄⡀⣼⡏⠀⠉⠉⠛⢻⣿⠟⠿⠿⣿⡿⠿⠟⠛⣿⡏⠀⣿⡇⣿⣿⠀⠀⣺⡇⠀⠀
⠀⠀⠀⠀⠙⣷⡀⠀⠀⠀⠀⠈⢻⣦⣾⠇⠈⠙⠛⠿⣿⣿⣷⣶⣤⣤⣤⣤⣿⣤⣤⣤⣼⣧⣤⣤⣤⣼⣷⣴⣿⣿⣿⣿⠀⠀⢾⡇⠀⠀
⠀⠀⠀⠀⠀⠘⣷⡄⠀⠀⠀⠀⠀⠙⠻⣦⣄⠀⠀⠀⣸⡏⠉⠙⠛⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⢾⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠈⢿⣦⡀⠀⡀⠀⠀⠀⠈⠛⢷⣦⣠⣿⠁⠀⠀⠀⠀⢈⣿⠀⠉⠉⢉⣿⠛⠛⢻⡿⠋⣹⡟⢹⣿⣾⠇⠀⠀⣺⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠘⠻⣦⣉⠓⠤⣉⠒⠤⣀⠈⠙⠻⠷⢶⣤⣤⣄⣸⣿⣀⣀⣀⣸⣟⣀⣠⣿⣇⣴⣿⣶⡾⠟⠁⠀⠀⠀⢼⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠿⣦⣌⡉⠲⠤⣉⠒⠦⢄⣀⠀⠈⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠀⠀⠀⡠⠀⠀⡀⠀⢸⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⠷⣦⣄⡉⠑⠒⠬⠭⣖⣒⡤⠤⠤⠤⠤⠤⠤⠤⣀⢄⡠⠤⠤⠒⠉⠀⢀⡰⠃⠀⢸⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠷⣶⣤⣀⠀⠀⠈⠉⠉⠒⠒⠒⠒⠐⠠⠦⠴⠤⠴⠤⠴⠒⠉⠀⠀⠀⣼⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⣶⣦⣤⣤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⠏⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠙⠛⠻⠷⠶⢶⣦⣤⣤⣤⣤⣤⡴⠶⠟⠋⠁⠀⠀⠀⠀`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `

                                                                                                                                                                                           
                                                                                                                                                                                           
                                                                                                                                                                                           
                                                                                                                                                                                           
HHHHHHHHH     HHHHHHHHH                   lllllll lllllll                                tttt         hhhhhhh                                                                           !!! 
H:::::::H     H:::::::H                   l:::::l l:::::l                             ttt:::t         h:::::h                                                                          !!:!!
H:::::::H     H:::::::H                   l:::::l l:::::l                             t:::::t         h:::::h                                                                          !:::!
HH::::::H     H::::::HH                   l:::::l l:::::l                             t:::::t         h:::::h                                                                          !:::!
  H:::::H     H:::::H      eeeeeeeeeeee    l::::l  l::::l    ooooooooooo        ttttttt:::::ttttttt    h::::h hhhhh           eeeeeeeeeeee    rrrrr   rrrrrrrrr       eeeeeeeeeeee     !:::!
  H:::::H     H:::::H    ee::::::::::::ee  l::::l  l::::l  oo:::::::::::oo      t:::::::::::::::::t    h::::hh:::::hhh      ee::::::::::::ee  r::::rrr:::::::::r    ee::::::::::::ee   !:::!
  H::::::HHHHH::::::H   e::::::eeeee:::::eel::::l  l::::l o:::::::::::::::o     t:::::::::::::::::t    h::::::::::::::hh   e::::::eeeee:::::eer:::::::::::::::::r  e::::::eeeee:::::ee !:::!
  H:::::::::::::::::H  e::::::e     e:::::el::::l  l::::l o:::::ooooo:::::o     tttttt:::::::tttttt    h:::::::hhh::::::h e::::::e     e:::::err::::::rrrrr::::::re::::::e     e:::::e !:::!
  H:::::::::::::::::H  e:::::::eeeee::::::el::::l  l::::l o::::o     o::::o           t:::::t          h::::::h   h::::::he:::::::eeeee::::::e r:::::r     r:::::re:::::::eeeee::::::e !:::!
  H::::::HHHHH::::::H  e:::::::::::::::::e l::::l  l::::l o::::o     o::::o           t:::::t          h:::::h     h:::::he:::::::::::::::::e  r:::::r     rrrrrrre:::::::::::::::::e  !:::!
  H:::::H     H:::::H  e::::::eeeeeeeeeee  l::::l  l::::l o::::o     o::::o           t:::::t          h:::::h     h:::::he::::::eeeeeeeeeee   r:::::r            e::::::eeeeeeeeeee   !!:!!
  H:::::H     H:::::H  e:::::::e           l::::l  l::::l o::::o     o::::o           t:::::t    tttttth:::::h     h:::::he:::::::e            r:::::r            e:::::::e             !!! 
HH::::::H     H::::::HHe::::::::e         l::::::ll::::::lo:::::ooooo:::::o           t::::::tttt:::::th:::::h     h:::::he::::::::e           r:::::r            e::::::::e               
H:::::::H     H:::::::H e::::::::eeeeeeee l::::::ll::::::lo:::::::::::::::o           tt::::::::::::::th:::::h     h:::::h e::::::::eeeeeeee   r:::::r             e::::::::eeeeeeee    !!! 
H:::::::H     H:::::::H  ee:::::::::::::e l::::::ll::::::l oo:::::::::::oo              tt:::::::::::tth:::::h     h:::::h  ee:::::::::::::e   r:::::r              ee:::::::::::::e   !!:!!
HHHHHHHHH     HHHHHHHHH    eeeeeeeeeeeeee llllllllllllllll   ooooooooooo                  ttttttttttt  hhhhhhh     hhhhhhh    eeeeeeeeeeeeee   rrrrrrr                eeeeeeeeeeeeee    !!! 
                                                                                                                                                                                           
                                                                                                                                                                                           
                                                                                                                                                                                           
                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
My name's Tim Numé and this is my portfolio :)                                                                                              

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.

Ps. Dont try to use sudo.

`;
};
