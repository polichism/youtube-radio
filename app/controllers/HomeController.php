<?php

class HomeController extends BaseController {

	public function getIndex()
	{
		return View::make('index');
	}

	public function postIndex() {

		$input = Input::all();
		$client = new Google_Client();

		$client->setDeveloperKey(Config::get('youtube.developer_key'));
		$youtube = new Google_Service_YouTube($client);
		$searchResponse = array();
		try {
			$searchResponse = $youtube->search->listSearch('id,snippet', array(
      			'q' => $input['title'],
      			'maxResults' => 5,
    		));

		} catch(Google_ServiceExpetion $e) {
			Log::info($e->getMessage());
		}
		$video_id = '';
		$rand = rand(1, 5);
		$count = 1;


		if(is_object($searchResponse)) {
			foreach($searchResponse['items'] as $item) {
				$video_id = $item['id']->videoId;
			}
		}

		$data['video_id'] = $video_id;

		return View::make('index', $data);

	}

}