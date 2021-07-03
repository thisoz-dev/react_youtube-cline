class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
    this.promises = [];
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet, statistics',
        chart: 'mostPopular',
        regionCode: 'kr',
        maxResults: 25,
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        q: query,
        type: 'video',
      },
    });
    return response.data.items.map((item) => ({ ...item, id: item.id.videoId }));
  }

  async channels(id) {
    const response = await this.youtube.get('channels', {
      params: {
        part: 'snippet, statistics',
        id,
      },
    });
    return response.data.items.map((item) => ({ ...item }));
  }
}

export default Youtube;
