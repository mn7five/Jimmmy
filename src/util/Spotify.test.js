const assert = require('assert');
import Spotify from "./Spotify";

describe('Spotify', () => {
    describe('Get access token', () => {
        beforeEach(() => {
            // define window.location
            delete window.location;
            window.location = {
              href: 'http://127.0.0.1:3000/#access_token=fake_token&expires_in=3600'
            };
        });

        test('Access token is extracted from URL', () => {
            const token = Spotify.getAccessToken();
            expect(token).toBe('fake_token');
        });
    });
});
  