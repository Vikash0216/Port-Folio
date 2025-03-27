import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion';

const GitHub = () => {
  const { profile, repos } = useLoaderData();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6 w-3/4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Profile Picture and User Info */}
        <div className="md:w-1/4 flex flex-col items-center text-center">
          <motion.img
            src={profile.avatar_url}
            alt="GitHub profile"
            className="rounded-full w-32 h-32 mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <h2 className="text-xl font-bold">{profile.name || profile.login}</h2>
          <p>@{profile.login}</p>
          <p>{profile.followers} Followers</p>
          <p>{profile.following} Following</p>
        </div>

        {/* Repository List */}
        <div className="md:w-3/4 mt-6 md:mt-0 md:pl-6">
          <h3 className="text-2xl font-semibold mb-4">Repositories</h3>
          <ul className="space-y-3">
            {repos.map((repo) => (
              <motion.li
                key={repo.id}
                className="p-4 border rounded-lg hover:bg-gray-100"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-500">
                  {repo.name}
                </a>
                <p className="text-sm text-gray-600">{repo.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default GitHub;


export async function githubLoader() {
  try {
    const [profileResponse, reposResponse] = await Promise.all([
      fetch('https://api.github.com/users/Vikash0216'),
      fetch('https://api.github.com/users/Vikash0216/repos')
    ]);
    
    if (!profileResponse.ok || !reposResponse.ok) {
      throw new Error('Failed to fetch GitHub data');
    }

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return { profile, repos };
  } catch (error) {
    console.error('Error loading GitHub data:', error);
    throw error;
  }
}

// export const gitInfoLoader = async ()=>{
//   const response = await fetch('https://api.github.com/users/Vikash0216')
//   return response.json()
//  }