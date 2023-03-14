import { Octokit } from 'octokit';

const octokit = new Octokit({
    baseUrl: "https://api.github.com",
    auth: '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',
  });


export default octokit;