document.addEventListener('DOMContentLoaded', async () => {
	try {
        const mainContent = document.querySelector('#apiData');
		const response = await fetch('/api')
		if (!response.ok) {
			throw new Error('Failed to fetch data')
		}
		const data = await response.json()
		let output = ""
        data.forEach(user => {
            output += `
            <div>
              <h3>${user.name}</h3>
              <p>Id: ${user.id}</p>
            </div>
          `;
        });
		mainContent.innerHTML = output
	} catch (error) {
		console.error(error)
		mainContent.innerHTML = 'Error: Failed to fetch data from the API'
	}
})
