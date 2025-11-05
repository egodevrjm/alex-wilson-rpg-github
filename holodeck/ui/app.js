// ==============================================
// ALEX WILSON HOLODECK - APPLICATION LOGIC
// ==============================================

class HolodeckApp {
    constructor() {
        this.state = this.loadState();
        this.songs = this.loadSongs();
        this.sessionStartTime = Date.now();
        this.init();
    }

    // Initialize application
    init() {
        this.bindElements();
        this.attachEventListeners();
        this.updateUI();
        this.logEvent('Session initialized');
        this.updateConnectionStatus('ready', 'Ready');
    }

    // Bind DOM elements
    bindElements() {
        // Input
        this.directorInput = document.getElementById('director-input');
        this.sendBtn = document.getElementById('send-btn');
        this.clearInputBtn = document.getElementById('clear-input-btn');

        // Scene display
        this.sceneContainer = document.getElementById('scene-container');

        // Modals
        this.songModal = document.getElementById('song-modal');
        this.helpModal = document.getElementById('help-modal');
        this.settingsModal = document.getElementById('settings-modal');

        // Song form
        this.songForm = document.getElementById('song-form');
        this.songTitle = document.getElementById('song-title');
        this.songLyrics = document.getElementById('song-lyrics');
        this.songNotes = document.getElementById('song-notes');
        this.songContext = document.getElementById('song-context');

        // Buttons
        this.songBtn = document.getElementById('song-btn');
        this.helpBtn = document.getElementById('help-btn');
        this.newSessionBtn = document.getElementById('new-session-btn');
        this.saveStateBtn = document.getElementById('save-state-btn');
        this.loadStateBtn = document.getElementById('load-state-btn');

        // State displays
        this.stateElements = {
            location: document.getElementById('location'),
            datetime: document.getElementById('datetime'),
            cash: document.getElementById('cash'),
            bank: document.getElementById('bank'),
            totalMoney: document.getElementById('total-money'),
            energy: document.getElementById('energy-value'),
            energyBar: document.getElementById('energy-bar'),
            hunger: document.getElementById('hunger-value'),
            hungerBar: document.getElementById('hunger-bar'),
            guitarStatus: document.getElementById('guitar-status'),
            vehicleStatus: document.getElementById('vehicle-status'),
            phoneBattery: document.getElementById('phone-battery'),
            xFollowers: document.getElementById('x-followers'),
            xDelta: document.getElementById('x-delta'),
            igFollowers: document.getElementById('ig-followers'),
            igDelta: document.getElementById('ig-delta'),
            ttFollowers: document.getElementById('tt-followers'),
            ttDelta: document.getElementById('tt-delta'),
            ytFollowers: document.getElementById('yt-followers'),
            ytDelta: document.getElementById('yt-delta'),
            sceneCount: document.getElementById('scene-count'),
            consequenceCount: document.getElementById('consequence-count'),
        };

        // Other
        this.sessionLog = document.getElementById('session-log');
        this.consequencesList = document.getElementById('consequences-list');
        this.connectionStatus = document.getElementById('connection-status');
    }

    // Attach event listeners
    attachEventListeners() {
        // Send input
        this.sendBtn.addEventListener('click', () => this.handleSend());
        this.directorInput.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                e.preventDefault();
                this.handleSend();
            }
        });

        // Clear input
        this.clearInputBtn.addEventListener('click', () => this.clearInput());

        // Song modal
        this.songBtn.addEventListener('click', () => this.openSongModal());
        document.getElementById('close-song-modal').addEventListener('click', () => this.closeSongModal());
        document.getElementById('cancel-song-btn').addEventListener('click', () => this.closeSongModal());
        this.songForm.addEventListener('submit', (e) => this.handleSongSubmit(e));

        // Help modal
        this.helpBtn.addEventListener('click', () => this.openHelpModal());
        document.getElementById('close-help-modal').addEventListener('click', () => this.closeHelpModal());

        // Quick actions
        document.querySelectorAll('.action-btn[data-command]').forEach(btn => {
            btn.addEventListener('click', () => {
                const command = btn.getAttribute('data-command');
                this.directorInput.value = command;
                this.directorInput.focus();
            });
        });

        // Example buttons
        document.querySelectorAll('.example-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const scene = btn.getAttribute('data-scene');
                this.directorInput.value = scene;
                this.directorInput.focus();
            });
        });

        // Session management
        this.newSessionBtn.addEventListener('click', () => this.newSession());
        this.saveStateBtn.addEventListener('click', () => this.saveStateToFile());
        this.loadStateBtn.addEventListener('click', () => this.loadStateFromFile());

        // Modal background clicks
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                this.clearInput();
            }
            if (e.ctrlKey && e.key === '/') {
                e.preventDefault();
                this.openHelpModal();
            }
        });

        // Auto-resize textarea
        this.directorInput.addEventListener('input', () => {
            this.directorInput.style.height = 'auto';
            this.directorInput.style.height = Math.min(this.directorInput.scrollHeight, 300) + 'px';
        });
    }

    // Handle send input
    handleSend() {
        const input = this.directorInput.value.trim();
        if (!input) return;

        // Add to scene display
        this.addSceneEntry('DIRECTOR INPUT', input);

        // Copy to clipboard
        this.copyToClipboard(input);

        // Log event
        this.logEvent(`Input sent: ${input.substring(0, 50)}...`);

        // Update state if it contains state changes
        this.parseInputForStateChanges(input);

        // Clear input
        this.clearInput();

        // Show notification
        this.showNotification('Input copied to clipboard. Paste into Claude.');
    }

    // Parse input for state changes (SET commands, etc.)
    parseInputForStateChanges(input) {
        const setMatch = input.match(/SET:\s*(.+)/i);
        if (setMatch) {
            const change = setMatch[1];

            // Parse money changes
            const cashMatch = change.match(/cash(?:\s+to)?\s*\$?(\d+)/i);
            if (cashMatch) {
                this.state.current_state.financial.cash = parseInt(cashMatch[1]);
            }

            const bankMatch = change.match(/bank(?:\s+to)?\s*\$?(-?\d+)/i);
            if (bankMatch) {
                this.state.current_state.financial.bank = parseInt(bankMatch[1]);
            }

            // Parse energy changes
            const energyMatch = change.match(/energy(?:\s+to)?\s*(\d+)/i);
            if (energyMatch) {
                this.state.current_state.vitals.energy = parseInt(energyMatch[1]);
            }

            // Parse hunger changes
            const hungerMatch = change.match(/hunger(?:\s+to)?\s*(\d+)/i);
            if (hungerMatch) {
                this.state.current_state.vitals.hunger = parseInt(hungerMatch[1]);
            }

            this.updateUI();
            this.saveState();
        }
    }

    // Add scene entry
    addSceneEntry(type, content) {
        const entry = document.createElement('div');
        entry.className = 'scene-entry';

        const header = document.createElement('div');
        header.className = 'scene-header';
        header.textContent = type;

        const body = document.createElement('div');
        body.className = 'scene-content';
        body.textContent = content;

        entry.appendChild(header);
        entry.appendChild(body);

        // Remove welcome screen if present
        const welcome = this.sceneContainer.querySelector('.welcome-screen');
        if (welcome) {
            welcome.remove();
        }

        this.sceneContainer.appendChild(entry);

        // Scroll to bottom
        this.sceneContainer.scrollTop = this.sceneContainer.scrollHeight;

        // Increment scene count
        this.state.session_info.scene_count++;
        this.updateUI();
    }

    // Handle song submission
    handleSongSubmit(e) {
        e.preventDefault();

        const song = {
            title: this.songTitle.value.trim(),
            lyrics: this.songLyrics.value.trim(),
            performance_notes: this.songNotes.value.trim(),
            context: this.songContext.value.trim(),
            timestamp: new Date().toISOString(),
            copyright_free: true
        };

        // Save song
        this.songs.push(song);
        this.saveSongs();

        // Format for input
        const songText = this.formatSongForInput(song);

        // Add to director input
        this.directorInput.value = songText;

        // Close modal
        this.closeSongModal();

        // Log event
        this.logEvent(`Song added: ${song.title}`);

        // Show notification
        this.showNotification(`Song "${song.title}" added to input`);

        // Reset form
        this.songForm.reset();
    }

    // Format song for director input
    formatSongForInput(song) {
        return `SONG PERFORMANCE:

Title: ${song.title}

Performance/Production Notes:
${song.performance_notes}

Lyrics:
${song.lyrics}

${song.context ? `Context: ${song.context}` : ''}

[This song is copyright-free and available for reuse in game]

Alex performs this song.`;
    }

    // Update UI with current state
    updateUI() {
        const s = this.state.current_state;

        // Location & Time
        this.stateElements.location.textContent = s.location.specific;
        this.stateElements.datetime.textContent = `${s.datetime.day_of_week}, ${s.datetime.date}, ${s.datetime.time}`;

        // Financial
        this.stateElements.cash.textContent = this.formatMoney(s.financial.cash);
        this.stateElements.bank.textContent = this.formatMoney(s.financial.bank);
        const total = s.financial.cash + s.financial.bank;
        this.stateElements.totalMoney.textContent = this.formatMoney(total);
        this.stateElements.totalMoney.style.color = total < 0 ? 'var(--accent-red)' : 'var(--accent-green)';

        // Vitals
        this.stateElements.energy.textContent = `${s.vitals.energy}/${s.vitals.energy_max}`;
        this.stateElements.energyBar.style.width = `${(s.vitals.energy / s.vitals.energy_max) * 100}%`;

        this.stateElements.hunger.textContent = `${s.vitals.hunger}/${s.vitals.hunger_max}`;
        this.stateElements.hungerBar.style.width = `${(s.vitals.hunger / s.vitals.hunger_max) * 100}%`;

        // Equipment
        this.stateElements.guitarStatus.textContent = `${s.equipment.guitar.name} (${s.equipment.guitar.status})`;
        this.stateElements.vehicleStatus.textContent = `${s.equipment.vehicle.model} (${s.equipment.vehicle.status})`;
        this.stateElements.phoneBattery.textContent = `${s.equipment.phone.battery}%`;

        // Social Media
        this.updateSocialMedia('x', s.social_media.x);
        this.updateSocialMedia('ig', s.social_media.instagram);
        this.updateSocialMedia('tt', s.social_media.tiktok);
        this.updateSocialMedia('yt', s.social_media.youtube);

        // Stats
        this.stateElements.sceneCount.textContent = this.state.session_info.scene_count;
        this.stateElements.consequenceCount.textContent = this.state.consequences.active.length;

        // Consequences
        this.updateConsequencesList();
    }

    // Update social media display
    updateSocialMedia(platform, data) {
        this.stateElements[`${platform}Followers`].textContent = this.formatNumber(data.followers);
        const delta = data.delta_this_scene;
        this.stateElements[`${platform}Delta`].textContent = delta >= 0 ? `+${delta}` : delta;
        this.stateElements[`${platform}Delta`].className = delta >= 0 ? 'delta positive' : 'delta negative';
    }

    // Update consequences list
    updateConsequencesList() {
        const list = this.consequencesList;
        list.innerHTML = '';

        const consequences = this.state.consequences.active;

        if (consequences.length === 0) {
            list.innerHTML = '<p class="empty-state">No active consequences</p>';
            return;
        }

        consequences.forEach(cons => {
            const item = document.createElement('div');
            item.className = 'consequence-item';
            item.innerHTML = `
                <div class="consequence-severity">Severity ${cons.severity}/10</div>
                <div>${cons.description}</div>
            `;
            list.appendChild(item);
        });
    }

    // Log event
    logEvent(text) {
        const entry = document.createElement('div');
        entry.className = 'log-entry';

        const elapsed = Date.now() - this.sessionStartTime;
        const time = this.formatTime(elapsed);

        entry.innerHTML = `
            <span class="log-time">${time}</span>
            <span class="log-text">${text}</span>
        `;

        this.sessionLog.appendChild(entry);
        this.sessionLog.scrollTop = this.sessionLog.scrollHeight;
    }

    // Update connection status
    updateConnectionStatus(status, text) {
        const statusDot = this.connectionStatus.querySelector('.status-dot');
        const statusText = this.connectionStatus.querySelector('.status-text');

        statusText.textContent = text;

        const colors = {
            ready: 'var(--accent-green)',
            busy: 'var(--accent-orange)',
            error: 'var(--accent-red)'
        };

        statusDot.style.background = colors[status] || 'var(--accent-green)';
    }

    // Utility: Format money
    formatMoney(amount) {
        const formatted = Math.abs(amount).toLocaleString();
        return amount < 0 ? `-$${formatted}` : `$${formatted}`;
    }

    // Utility: Format number
    formatNumber(num) {
        return num.toLocaleString();
    }

    // Utility: Format time
    formatTime(ms) {
        const seconds = Math.floor(ms / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);

        const h = hours.toString().padStart(2, '0');
        const m = (minutes % 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');

        return `${h}:${m}:${s}`;
    }

    // Utility: Copy to clipboard
    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    }

    // Utility: Show notification
    showNotification(message) {
        // Simple notification - could be enhanced
        const inputHints = document.getElementById('input-hints');
        inputHints.textContent = message;
        setTimeout(() => {
            inputHints.textContent = '';
        }, 3000);
    }

    // Clear input
    clearInput() {
        this.directorInput.value = '';
        this.directorInput.style.height = 'auto';
    }

    // Modal management
    openSongModal() {
        this.songModal.classList.add('active');
        this.songTitle.focus();
    }

    closeSongModal() {
        this.songModal.classList.remove('active');
    }

    openHelpModal() {
        this.helpModal.classList.add('active');
    }

    closeHelpModal() {
        this.helpModal.classList.remove('active');
    }

    // New session
    newSession() {
        if (confirm('Start a new session? Current session will be saved.')) {
            this.saveState();
            this.state = this.createNewState();
            this.sceneContainer.innerHTML = `
                <div class="welcome-screen">
                    <h2>New Session Started</h2>
                    <p>Ready to begin your story.</p>
                </div>
            `;
            this.sessionStartTime = Date.now();
            this.sessionLog.innerHTML = '<div class="log-entry"><span class="log-time">00:00:00</span><span class="log-text">New session initialized</span></div>';
            this.updateUI();
            this.saveState();
        }
    }

    // State management
    loadState() {
        const saved = localStorage.getItem('holodeck_state');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error('Failed to load state:', e);
            }
        }
        return this.createNewState();
    }

    saveState() {
        try {
            localStorage.setItem('holodeck_state', JSON.stringify(this.state));
        } catch (e) {
            console.error('Failed to save state:', e);
        }
    }

    createNewState() {
        return {
            session_info: {
                session_id: `session_${Date.now()}`,
                session_name: "New Session",
                created: new Date().toISOString(),
                scene_count: 0
            },
            character: {
                name: "Alex Wilson",
                age: 22,
                mode: "solo"
            },
            current_state: {
                location: {
                    specific: "Unknown",
                    city: "Nashville"
                },
                datetime: {
                    day_of_week: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
                    date: new Date().toISOString().split('T')[0],
                    time: new Date().toTimeString().split(' ')[0].substring(0, 5)
                },
                financial: {
                    cash: 0,
                    bank: 0
                },
                vitals: {
                    energy: 7,
                    energy_max: 10,
                    hunger: 5,
                    hunger_max: 10
                },
                equipment: {
                    guitar: {
                        name: "Betty",
                        status: "Good condition",
                        condition: 8
                    },
                    vehicle: {
                        model: "F-150",
                        status: "Running",
                        condition: 7
                    },
                    phone: {
                        battery: 100
                    }
                },
                social_media: {
                    x: { followers: 8000, delta_this_scene: 0 },
                    instagram: { followers: 12000, delta_this_scene: 0 },
                    tiktok: { followers: 30000, delta_this_scene: 0 },
                    youtube: { followers: 2000, delta_this_scene: 0 }
                }
            },
            consequences: {
                active: [],
                resolved: []
            }
        };
    }

    saveStateToFile() {
        const dataStr = JSON.stringify(this.state, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `holodeck_session_${Date.now()}.json`;
        link.click();

        URL.revokeObjectURL(url);
        this.logEvent('State saved to file');
    }

    loadStateFromFile() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'application/json';

        input.onchange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = (event) => {
                try {
                    this.state = JSON.parse(event.target.result);
                    this.updateUI();
                    this.saveState();
                    this.logEvent('State loaded from file');
                    this.showNotification('Session loaded successfully');
                } catch (error) {
                    console.error('Failed to load state:', error);
                    this.showNotification('Failed to load session file');
                }
            };

            reader.readAsText(file);
        };

        input.click();
    }

    // Song management
    loadSongs() {
        const saved = localStorage.getItem('holodeck_songs');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error('Failed to load songs:', e);
            }
        }
        return [];
    }

    saveSongs() {
        try {
            localStorage.setItem('holodeck_songs', JSON.stringify(this.songs));
        } catch (e) {
            console.error('Failed to save songs:', e);
        }
    }

    getSongByTitle(title) {
        return this.songs.find(s =>
            s.title.toLowerCase() === title.toLowerCase()
        );
    }

    getAllSongs() {
        return this.songs;
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.holodeckApp = new HolodeckApp();
});
